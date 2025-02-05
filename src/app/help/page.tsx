"use client"
import React from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { HomeIcon, ClipboardDocumentIcon, QuestionMarkCircleIcon, ChevronRightIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const HelpPage: React.FC = () => {
  const faqs = [
    {
      category: "General",
      items: [
        {
          question: "How does the assessment work?",
          answer: "Our AI-powered system guides you through simple symptoms questions, then provides personalized recommendations based on medical guidelines."
        },
        {
          question: "Is my data secure?",
          answer: "We use end-to-end encryption and never share your health information with third parties."
        }
      ]
    },
    {
      category: "Technical",
      items: [
        {
          question: "What browsers are supported?",
          answer: "We support all modern browsers including Chrome, Firefox, Safari, and Edge. Latest 2 versions recommended."
        },
        {
          question: "Mobile app availability?",
          answer: "Progressive web app support coming soon! Currently optimized for mobile browsers."
        }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Help Center - HealthGuard</title>
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-purple-100">
        {/* Navigation Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="sticky top-0 bg-white/80 backdrop-blur-sm shadow-sm z-50"
        >
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" legacyBehavior>
              <a className="flex items-center space-x-2 group">
                <HomeIcon className="h-6 w-6 text-teal-600 group-hover:text-teal-700 transition-colors" />
                <span className="text-gray-700 group-hover:text-teal-700 transition-colors">Home</span>
              </a>
            </Link>
            <Link href="/system" legacyBehavior>
              <a className="flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white px-5 py-2 rounded-full group">
                <ClipboardDocumentIcon className="h-5 w-5" />
                <span>Start Assessment</span>
              </a>
            </Link>
          </div>
        </motion.header>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-teal-100 p-4 rounded-2xl mb-6">
              <QuestionMarkCircleIcon className="h-12 w-12 text-teal-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-blue-700 bg-clip-text text-transparent mb-4">
              How can we help?
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Find answers to common questions or contact our support team directly.
            </p>
          </motion.div>

          {/* FAQ Sections */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {faqs.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, x: sectionIndex % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: sectionIndex * 0.1 }}
                className="bg-white rounded-2xl shadow-lg"
              >
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800">{section.category}</h2>
                </div>
                <div className="p-6">
                  <AnimatePresence>
                    {section.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="mb-6 last:mb-0"
                      >
                        <details className="group">
                          <summary className="flex items-center justify-between cursor-pointer list-none">
                            <span className="text-gray-700 group-hover:text-teal-600 transition-colors">
                              {item.question}
                            </span>
                            <ChevronRightIcon className="h-5 w-5 text-gray-400 group-hover:text-teal-600 transition-all transform group-open:rotate-90" />
                          </summary>
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="pt-4 text-gray-600"
                          >
                            {item.answer}
                          </motion.div>
                        </details>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mt-20 bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Still need help?</h2>
              <p className="text-teal-50">Our support team is here for you 24/7</p>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <PhoneIcon className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-gray-600">Call us at</p>
                    <a href="tel:+1234567890" className="text-lg font-medium text-gray-800 hover:text-teal-600">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <EnvelopeIcon className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-gray-600">Email us at</p>
                    <a href="mailto:support@healthguard.com" className="text-lg font-medium text-gray-800 hover:text-teal-600">
                      support@healthguard.com
                    </a>
                  </div>
                </div>

                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Your Email</label>
                    <input 
                      type="email" 
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Floating Decorations */}
          <motion.div
            className="absolute top-20 right-10 w-48 h-48 bg-teal-200/30 rounded-full blur-2xl -z-10"
            animate={{
              scale: [1, 1.2, 1],
              y: [0, -30, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity
            }}
          />
        </div>
      </div>
    </>
  );
};

export default HelpPage;