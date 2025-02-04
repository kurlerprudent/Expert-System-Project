// frontend/components/SymptomForm.tsx

"use client"
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSymptomStore } from '../state/useStore';

const symptomsList = [
  'Headache',
  'Fever',
  'Cough',
  'Sore Throat',
  'Fatigue',
  'Nausea',
  'Dizziness',
];

const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const SymptomForm: React.FC = () => {
  const { selectedSymptoms, addSymptom, removeSymptom } = useSymptomStore();

  const handleToggle = (symptom: string) => {
    if (selectedSymptoms.includes(symptom)) {
      removeSymptom(symptom);
    } else {
      addSymptom(symptom);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Select Your Symptoms</h2>
      <div className="grid grid-cols-2 gap-4">
        {symptomsList.map((symptom) => (
          <motion.button
            key={symptom}
           
            className={`p-4 rounded-xl border-2 focus:outline-none transition-all
              ${selectedSymptoms.includes(symptom) 
                ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white border-transparent' 
                : 'bg-white text-gray-800 border-gray-200 hover:border-blue-300'}`}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => handleToggle(symptom)}
          >
            <AnimatePresence>
              {selectedSymptoms.includes(symptom) && (
                <motion.span
                  className="block"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={itemVariants}
                >
                  ✓
                </motion.span>
              )}
            </AnimatePresence>
            <span className="ml-2">{symptom}</span>
          </motion.button>
        ))}
      </div>
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          {selectedSymptoms.length > 0
            ? `You have selected ${selectedSymptoms.length} symptom${selectedSymptoms.length > 1 ? 's' : ''}.`
            : 'No symptoms selected yet.'}
        </p>
      </div>
    </div>
  );
};

export default SymptomForm;
