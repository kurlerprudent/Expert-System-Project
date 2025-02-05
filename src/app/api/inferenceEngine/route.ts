import { NextResponse } from 'next/server';
import { supabase } from '@/libs/supabaseClient';

// Define types for the expected data
type Symptom = {
  id: number;
  name: string;
};

type ConditionSymptom = {
  condition_id: number;
};

type TreatmentData = {
  recommendation_mild: string;
  recommendation_moderate: string;
  recommendation_severe: string;
  conditions: { name: string } | null;
  drugs: { name: string } | null;
};

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

    if (symptomError || !symptomData || symptomData.length === 0) {
      return NextResponse.json({ error: 'Failed to retrieve symptoms or no symptoms found.' }, { status: 400 });
    }

    // Extract symptom IDs
    const symptomIDs = symptomData.map((s) => s.id);

    // 2. Find matching conditions from condition_symptoms
    const { data: conditionMatches, error: conditionMatchError } = await supabase
      .from('condition_symptoms')
      .select('condition_id')
      .in('symptom_id', symptomIDs);

    if (conditionMatchError || !conditionMatches || conditionMatches.length === 0) {
      return NextResponse.json({ error: 'No matching condition found.' }, { status: 404 });
    }

    // Count occurrences of each condition_id
    const conditionCountMap = new Map<number, number>();
    conditionMatches.forEach((row) => {
      conditionCountMap.set(row.condition_id, (conditionCountMap.get(row.condition_id) || 0) + 1);
    });

    // Get the condition with the highest count
    let bestConditionId: number | null = null;
    let bestCount = 0;
    for (const [conditionId, count] of conditionCountMap) {
      if (count > bestCount) {
        bestCount = count;
        bestConditionId = conditionId;
      }
    }

    if (!bestConditionId) {
      return NextResponse.json({ error: 'No best condition found.' }, { status: 404 });
    }

    // 3. Retrieve the treatment recommendation for the identified condition
  // 3. Retrieve the treatment recommendation for the identified condition
const { data: treatmentData, error: treatmentError } = await supabase
.from('treatment_rules')
.select(`
  recommendation_mild,
  recommendation_moderate,
  recommendation_severe,
  conditions ( name ),
  drugs ( name )
`)
.eq('condition_id', bestConditionId)
.maybeSingle();

console.log('Treatment Data:', JSON.stringify(treatmentData, null, 2));

if (treatmentError || !treatmentData) {
return NextResponse.json({ error: 'No treatment data found for the identified condition.' }, { status: 404 });
}

// Select the appropriate recommendation based on severity
let recommendation = '';
switch (severity) {
case 'severe':
  recommendation = treatmentData.recommendation_severe;
  break;
case 'moderate':
  recommendation = treatmentData.recommendation_moderate;
  break;
case 'mild':
default:
  recommendation = treatmentData.recommendation_mild;
  break;
}

return NextResponse.json({
  recommendation,
  condition: Array.isArray(treatmentData.conditions)
    ? treatmentData.conditions[0]?.name || 'Unknown'
    : treatmentData.conditions?.name || 'Unknown',
  drug: Array.isArray(treatmentData.drugs)
    ? treatmentData.drugs[0]?.name || 'Unknown'
    : treatmentData.drugs?.name || 'Unknown',
});


    
    
  } catch (error) {
    console.error('Inference engine error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
