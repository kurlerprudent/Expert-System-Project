// SymptomStep.tsx
import React from 'react';
import { motion } from 'framer-motion';
import SymptomForm from './form';

export default function SymptomStep({ onNext, onBack }: { 
  onNext: () => void, 
  onBack: () => void 
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Select Your Symptoms</h2>
      <SymptomForm />
      
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
          onClick={onNext}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700"
        >
          Next
        </motion.button>
      </div>
    </div>
  );
}