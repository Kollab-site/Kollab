"use client";

import { motion } from "framer-motion";
import { Navbar } from "../components/navigation/Navbar";
import { Footer } from "../components/layout/Footer";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Users,
  BarChart2,
  Shield,
} from "lucide-react";

export default function GetStartedPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <div className="pt-16">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-20"
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block"
            >
              Start Your Influencer Marketing Journey
            </motion.div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Get Started with Reachly
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Follow these simple steps to launch your first influencer
              marketing campaign
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/signup"
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition flex items-center gap-2 justify-center max-w-xs mx-auto"
              >
                Create Your Account <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Steps Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ y: -10 }}
                className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="text-indigo-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Step 1: Sign Up</h3>
                <p className="text-gray-600 mb-4">
                  Create your account and complete your profile to get started
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle2 size={16} className="text-indigo-600" />
                    Fill in your business details
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle2 size={16} className="text-indigo-600" />
                    Verify your email
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
                <h3 className="text-xl font-semibold mb-3">
                  Step 2: Find Influencers
                </h3>
                <p className="text-gray-600 mb-4">
                  Use our AI-powered search to find the perfect influencers
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle2 size={16} className="text-indigo-600" />
                    Set your campaign goals
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle2 size={16} className="text-indigo-600" />
                    Filter by audience demographics
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
                <h3 className="text-xl font-semibold mb-3">
                  Step 3: Launch Campaign
                </h3>
                <p className="text-gray-600 mb-4">
                  Manage and track your influencer campaigns
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle2 size={16} className="text-indigo-600" />
                    Set campaign budget
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle2 size={16} className="text-indigo-600" />
                    Monitor performance
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Reachly?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our platform offers everything you need to run successful
                influencer marketing campaigns
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ y: -10 }}
                className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <Shield className="text-indigo-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      AI-Powered Matching
                    </h3>
                    <p className="text-gray-600">
                      Our advanced AI algorithms help you find the perfect
                      influencers for your brand based on audience demographics,
                      engagement rates, and content style.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <BarChart2 className="text-indigo-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Real-time Analytics
                    </h3>
                    <p className="text-gray-600">
                      Track campaign performance in real-time with detailed
                      analytics and ROI metrics. Make data-driven decisions to
                      optimize your campaigns.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <div className="bg-indigo-600 rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
                Join thousands of brands who are already using Reachly to power
                their influencer marketing campaigns.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/signup"
                  className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition inline-block"
                >
                  Create Your Account
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
      <Footer />
    </main>
  );
}
