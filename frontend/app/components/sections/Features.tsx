"use client";

import { Zap, Users, BarChart2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to run successful influencer campaigns
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Zap className="text-indigo-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Matching</h3>
            <p className="text-gray-600 mb-4">
              Find the perfect influencers for your brand using our advanced AI
              algorithms.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-600">
                <CheckCircle2 size={16} className="text-indigo-600" />
                Smart matching based on audience demographics
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <CheckCircle2 size={16} className="text-indigo-600" />
                Real-time performance predictions
              </li>
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Users className="text-indigo-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Campaign Management</h3>
            <p className="text-gray-600 mb-4">
              Easily manage and track your influencer marketing campaigns in one
              place.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-600">
                <CheckCircle2 size={16} className="text-indigo-600" />
                Automated workflow management
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <CheckCircle2 size={16} className="text-indigo-600" />
                Content approval system
              </li>
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <BarChart2 className="text-indigo-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Analytics</h3>
            <p className="text-gray-600 mb-4">
              Get detailed insights and ROI metrics for all your influencer
              partnerships.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-600">
                <CheckCircle2 size={16} className="text-indigo-600" />
                Real-time performance tracking
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <CheckCircle2 size={16} className="text-indigo-600" />
                Customizable reports
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
