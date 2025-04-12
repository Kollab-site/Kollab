"use client";

import { motion } from "framer-motion";

export const Stats = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white py-16"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div whileHover={{ scale: 1.05 }} className="p-6">
            <div className="text-4xl font-bold text-indigo-600 mb-2">10K+</div>
            <div className="text-gray-600">Active Influencers</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-6">
            <div className="text-4xl font-bold text-indigo-600 mb-2">5K+</div>
            <div className="text-gray-600">Brands</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-6">
            <div className="text-4xl font-bold text-indigo-600 mb-2">$50M+</div>
            <div className="text-gray-600">Campaign Value</div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
