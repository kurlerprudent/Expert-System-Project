// src/components/VerificationStep.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSymptomStore } from '../state/useStore';

export default function VerificationStep({ onBack }: { onBack: () => void }) {
  const { selectedSymptoms } = useSymptomStore();
  const [onsetDate, setOnsetDate] = useState('');
  const [severity, setSeverity] = useState('');
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [condition, setCondition] = useState<string | null>(null);
  const [drug, setDrug] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const getInference = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/inferenceEngine', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ selectedSymptoms, onsetDate, severity }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || 'Something went wrong');
        setLoading(false);
        return;
      }
  
      const data = await response.json();
      setRecommendation(data.recommendation);
      setCondition(data.condition);
      setDrug(data.drug);
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Failed to fetch recommendation');
    }
    setLoading(false);
  };
  

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Additional Information</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-2">When did symptoms first appear?</label>
          <input
            type="date"
            value={onsetDate}
            onChange={(e) => setOnsetDate(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">How severe are your symptoms?</label>
          <select
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select severity</option>
            <option value="mild">Mild</option>
            <option value="moderate">Moderate</option>
            <option value="severe">Severe</option>
          </select>
        </div>

        <div className="flex justify-between mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="bg-gray-100 text-gray-600 px-6 py-2 rounded-lg font-medium"
          >
            Back
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={getInference}
            disabled={loading || !onsetDate || !severity}
            className={`px-6 py-2 rounded-lg font-medium text-white transition-colors ${
              loading || !onsetDate || !severity
                ? 'bg-green-400 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {loading ? 'Loading...' : 'Get Recommendation'}
          </motion.button>
        </div>

        {error && <p className="mt-4 text-red-500">{error}</p>}

        {recommendation && (
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded">
            <h3 className="text-lg font-bold">Your Recommendation:</h3>
            <p className="mt-2">{recommendation}</p>
            {condition && (
              <p className="mt-2">
                <strong>Condition:</strong> {condition}
              </p>
            )}
            {drug && (
              <p className="mt-2">
                <strong>Drug:</strong> {drug}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
