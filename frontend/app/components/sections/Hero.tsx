"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 py-20"
    >
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium mb-6"
        >
          AI-Powered Influencer Marketing Platform
        </motion.div>
        <h1 className="text-6xl font-bold text-gray-900 mb-6">
          Find Your Perfect{" "}
          <span className="text-indigo-600">Influencer Match</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          Connect with the perfect influencers for your brand using advanced AI
          technology. Maximize your marketing ROI with data-driven influencer
          partnerships.
        </p>
        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition flex items-center gap-2"
          >
            Get Started <ArrowRight size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition"
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};
