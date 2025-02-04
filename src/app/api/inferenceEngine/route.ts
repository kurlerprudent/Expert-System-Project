// src/app/api/inferenceEngine/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '@/libs/supabaseClient';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { selectedSymptoms, onsetDate, severity } = body;

    // Validate request payload
    if (!selectedSymptoms || !Array.isArray(selectedSymptoms) || selectedSymptoms.length === 0) {
      return NextResponse.json({ error: 'No symptoms provided' }, { status: 400 });
    }
    if (!onsetDate) {
      return NextResponse.json({ error: 'onsetDate is required' }, { status: 400 });
    }
    if (!severity) {
      return NextResponse.json({ error: 'severity is required' }, { status: 400 });
    }

    // 1. Get symptom IDs from database
    const { data: symptomData, error: symptomError } = await supabase
      .from('symptoms')
      .select('id, name')
      .in('name', selectedSymptoms);

    if (symptomError) {
      console.error('Symptom query error:', symptomError);
      return NextResponse.json({ error: 'Failed to retrieve symptoms from database.' }, { status: 500 });
    }
    if (!symptomData || symptomData.length === 0) {
      return NextResponse.json({ error: 'None of the provided symptoms were found in the database.' }, { status: 400 });
    }

    // Extract symptom IDs
    const symptomIDs = symptomData.map((s) => s.id);

    // 2. Find conditions linked to symptoms
    const { data: conditionMatches, error: conditionMatchError } = await supabase
      .from('condition_symptoms')
      .select('condition_id')
      .in('symptom_id', symptomIDs);

    if (conditionMatchError) {
      console.error('Condition matching error:', conditionMatchError);
      return NextResponse.json({ error: 'Failed to match conditions.' }, { status: 500 });
    }

    // Find the best matching condition
    const conditionCountMap = new Map<number, number>();
    conditionMatches.forEach((row) => {
      const count = conditionCountMap.get(row.condition_id) || 0;
      conditionCountMap.set(row.condition_id, count + 1);
    });

    let bestConditionId: number | null = null;
    let bestCount = 0;
    for (const [conditionId, count] of conditionCountMap) {
      if (count > bestCount) {
        bestCount = count;
        bestConditionId = conditionId;
      }
    }

    if (!bestConditionId) {
      return NextResponse.json({ error: 'No matching condition found.' }, { status: 404 });
    }

        // 3. Get treatment recommendation (UPDATED)
        const { data: treatmentData, error: treatmentError } = await supabase
        .from('treatment_rules')
        .select(`
          recommendation_mild,
          recommendation_moderate,
          recommendation_severe,
          condition_id,
          drug_id,
          conditions ( name ),
          drugs ( name )
        `)
        .eq('condition_id', bestConditionId)
        .single();

      if (treatmentError) {
        console.error('Treatment rule query error:', treatmentError);
        return NextResponse.json({ error: 'Failed to retrieve treatment rule.' }, { status: 500 });
      }

    // Determine which recommendation to return
    let recommendation = '';
    if (severity === 'severe') {
      recommendation = treatmentData.recommendation_severe;
    } else if (severity === 'moderate') {
      recommendation = treatmentData.recommendation_moderate;
    } else {
      recommendation = treatmentData.recommendation_mild;
    }

    return NextResponse.json({
      recommendation,
      condition: treatmentData.conditions[0]?.name || 'Unknown',
      drug: treatmentData.drugs[0]?.name || 'Unknown',
    });
  } catch (error) {
    console.error('Inference engine error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
