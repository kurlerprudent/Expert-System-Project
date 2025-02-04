// SystemPage.tsx
"use client"
import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import SymptomStep from '@/components/symptomStep';
import GreetingStep from '@/components/greeting';
import VerificationStep from '@/components/verificationStep';

const SystemPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    { component: <GreetingStep onNext={() => setCurrentStep(1)} /> },
    { component: <SymptomStep onNext={() => setCurrentStep(2)} onBack={() => setCurrentStep(0)} /> },
    { component: <VerificationStep onBack={() => setCurrentStep(1)} /> }
  ];

  
  return (
    <>
      <Head>
        <title>Health Assessment - Pharmacy Recommendation</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-10">
        <div className="container mx-auto px-4">
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              {steps[currentStep].component}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default SystemPage;