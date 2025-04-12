"use client";

import { motion } from "framer-motion";
import { Navbar } from "../components/navigation/Navbar";
import { Footer } from "../components/layout/Footer";
import { Users, Target, BarChart2, Globe } from "lucide-react";

export default function AboutPage() {
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
              Our Story
            </motion.div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About Reachly
            </h1>
            <p className="text-xl text-gray-600">
              We're revolutionizing influencer marketing by connecting brands
              with the perfect influencers through AI-powered technology.
            </p>
          </div>
        </motion.section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-600 mb-6">
                  At Reachly, we believe in the power of authentic connections
                  between brands and influencers. Our mission is to make
                  influencer marketing more accessible, transparent, and
                  effective for businesses of all sizes.
                </p>
                <p className="text-gray-600">
                  We're committed to helping brands find their perfect
                  influencer match while providing influencers with meaningful
                  opportunities to collaborate with brands that align with their
                  values and audience.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-indigo-50 p-8 rounded-2xl"
              >
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <Users className="text-indigo-600 mb-4" size={32} />
                    <h3 className="text-xl font-semibold mb-2">10,000+</h3>
                    <p className="text-gray-600">Active Influencers</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <Target className="text-indigo-600 mb-4" size={32} />
                    <h3 className="text-xl font-semibold mb-2">5,000+</h3>
                    <p className="text-gray-600">Brands</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <BarChart2 className="text-indigo-600 mb-4" size={32} />
                    <h3 className="text-xl font-semibold mb-2">$50M+</h3>
                    <p className="text-gray-600">Campaign Value</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <Globe className="text-indigo-600 mb-4" size={32} />
                    <h3 className="text-xl font-semibold mb-2">50+</h3>
                    <p className="text-gray-600">Countries</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These core values guide everything we do at Reachly
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ y: -10 }}
                className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-3">Transparency</h3>
                <p className="text-gray-600">
                  We believe in open and honest communication between brands and
                  influencers, ensuring clear expectations and fair
                  partnerships.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We continuously push the boundaries of what's possible in
                  influencer marketing through cutting-edge technology and
                  creative solutions.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-3">Community</h3>
                <p className="text-gray-600">
                  We foster a supportive community where brands and influencers
                  can grow together, sharing knowledge and building lasting
                  relationships.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The passionate people behind Reachly
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ y: -10 }}
                className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="w-24 h-24 bg-indigo-100 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  John Doe
                </h3>
                <p className="text-indigo-600 text-center mb-2">
                  CEO & Founder
                </p>
                <p className="text-gray-600 text-center">
                  Visionary leader with 10+ years of experience in digital
                  marketing and technology.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="w-24 h-24 bg-indigo-100 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  Jane Smith
                </h3>
                <p className="text-indigo-600 text-center mb-2">CTO</p>
                <p className="text-gray-600 text-center">
                  Tech innovator specializing in AI and machine learning
                  applications.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="w-24 h-24 bg-indigo-100 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  Mike Johnson
                </h3>
                <p className="text-indigo-600 text-center mb-2">
                  Head of Marketing
                </p>
                <p className="text-gray-600 text-center">
                  Marketing expert with a focus on brand growth and customer
                  success.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
