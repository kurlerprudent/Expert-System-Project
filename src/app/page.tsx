"use client"
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon, HeartIcon, ShieldCheckIcon, ClockIcon } from '@heroicons/react/24/outline';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <HeartIcon className="h-8 w-8" />,
      title: "Personalized Assessment",
      description: "AI-powered symptom analysis tailored to your unique needs"
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8" />,
      title: "Verified Recommendations",
      description: "Medically-reviewed treatment options from trusted sources"
    },
    {
      icon: <ClockIcon className="h-8 w-8" />,
      title: "24/7 Availability",
      description: "Get health insights anytime, anywhere - no appointments needed"
    }
  ];

  return (
    <>
      <Head>
        <title>HealthGuard - Smart Pharmacy Recommendations</title>
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-600 to-blue-700 bg-clip-text text-transparent mb-6">
              Smarter Health Choices
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Get instant, AI-powered health assessments and personalized pharmacy recommendations tailored just for you.
            </p>
            
            <Link href="/system" legacyBehavior>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Start Health Assessment
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </motion.a>
            </Link>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-br from-teal-100 to-blue-100 w-fit p-4 rounded-xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Animated Waves Decoration */}
          <motion.div 
            className="mt-20 opacity-10"
            animate={{ x: [-100, 0, 100, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            <div className="h-2 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full" />
            <div className="h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-4 ml-10" />
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} Pharmacy Medication Recommendation Expert System. All rights reserved.</p>
            <p className="mt-2 text-xs">
              Developed by Obed Sarkodie, Ninsin Akua Abigail, Owusu Emmanuel Takyi, Kelvin Kweku Siaw Ashong, and Ebenezer Ofori Acquah.
            </p>
          </div>
        </footer>
    </>
  );
};

export default HomePage;