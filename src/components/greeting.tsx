// GreetingStep.tsx
import { motion } from 'framer-motion';

export default function GreetingStep({ onNext }: { onNext: () => void }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
      <motion.h1 
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="text-4xl font-bold text-blue-600 mb-6"
      >
        👋 Welcome to Health Helper
      </motion.h1>
      <p className="text-gray-600 text-lg mb-8">
        Let's help you find the right care. First, we need to ask a few questions about your symptoms.
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all"
      >
        Start Assessment
      </motion.button>
    </div>
  );
}