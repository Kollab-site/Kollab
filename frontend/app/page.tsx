"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import {
  ArrowRight,
  BarChart2,
  Users,
  Zap,
  CheckCircle2,
  Star,
  Quote,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 transition-all duration-300 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-indigo-600">
                Reachly
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/about"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/login"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Login
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X size={24} className="text-gray-600" />
                ) : (
                  <Menu size={24} className="text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden ${
            isMenuOpen ? "block" : "hidden"
          } bg-white shadow-md`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/login"
              className="block px-3 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        {/* Hero Section */}
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
              Connect with the perfect influencers for your brand using advanced
              AI technology. Maximize your marketing ROI with data-driven
              influencer partnerships.
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

        {/* Stats Section */}
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
                <div className="text-4xl font-bold text-indigo-600 mb-2">
                  10K+
                </div>
                <div className="text-gray-600">Active Influencers</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="p-6">
                <div className="text-4xl font-bold text-indigo-600 mb-2">
                  5K+
                </div>
                <div className="text-gray-600">Brands</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="p-6">
                <div className="text-4xl font-bold text-indigo-600 mb-2">
                  $50M+
                </div>
                <div className="text-gray-600">Campaign Value</div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
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
                  Find the perfect influencers for your brand using our advanced
                  AI algorithms.
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
                <h3 className="text-xl font-semibold mb-3">
                  Campaign Management
                </h3>
                <p className="text-gray-600 mb-4">
                  Easily manage and track your influencer marketing campaigns in
                  one place.
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

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Trusted by leading brands and influencers worldwide
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ y: -10 }}
                className="p-8 bg-white rounded-xl shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400"
                      size={20}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <Quote className="text-indigo-600 mb-4" size={24} />
                <p className="text-gray-600 mb-6">
                  "Reachly's AI matching helped us find the perfect influencers
                  for our campaign. The results exceeded our expectations!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full"></div>
                  <div>
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="text-sm text-gray-500">
                      Marketing Director, TechCorp
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -10 }}
                className="p-8 bg-white rounded-xl shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400"
                      size={20}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <Quote className="text-indigo-600 mb-4" size={24} />
                <p className="text-gray-600 mb-6">
                  "The analytics dashboard is incredible. We can track ROI in
                  real-time and make data-driven decisions."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full"></div>
                  <div>
                    <div className="font-semibold">Michael Chen</div>
                    <div className="text-sm text-gray-500">
                      CEO, FashionForward
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -10 }}
                className="p-8 bg-white rounded-xl shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400"
                      size={20}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <Quote className="text-indigo-600 mb-4" size={24} />
                <p className="text-gray-600 mb-6">
                  "As an influencer, Reachly has helped me connect with brands
                  that align perfectly with my audience."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full"></div>
                  <div>
                    <div className="font-semibold">Emma Rodriguez</div>
                    <div className="text-sm text-gray-500">
                      Lifestyle Influencer
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose the plan that's right for your business
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ y: -10 }}
                className="p-8 bg-white rounded-xl shadow-sm relative"
              >
                <h3 className="text-xl font-semibold mb-4">Starter</h3>
                <div className="text-4xl font-bold text-gray-900 mb-4">
                  $99<span className="text-lg text-gray-500">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle2 size={16} className="text-indigo-600" />
                    Up to 5 campaigns
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle2 size={16} className="text-indigo-600" />
                    Basic AI matching
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle2 size={16} className="text-indigo-600" />
                    Standard analytics
                  </li>
                </ul>
                <button className="w-full bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition">
                  Get Started
                </button>
              </motion.div>
              <motion.div
                whileHover={{ y: -10 }}
                className="p-8 bg-indigo-600 rounded-xl shadow-sm text-white relative"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-700 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
                <h3 className="text-xl font-semibold mb-4">Professional</h3>
                <div className="text-4xl font-bold mb-4">
                  $299<span className="text-lg text-indigo-100">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-white" />
                    Unlimited campaigns
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-white" />
                    Advanced AI matching
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-white" />
                    Premium analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-white" />
                    Priority support
                  </li>
                </ul>
                <button className="w-full bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition">
                  Get Started
                </button>
              </motion.div>
              <motion.div
                whileHover={{ y: -10 }}
                className="p-8 bg-white rounded-xl shadow-sm relative"
              >
                <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-gray-900 mb-4">
                  Custom
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle2 size={16} className="text-indigo-600" />
                    Everything in Professional
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle2 size={16} className="text-indigo-600" />
                    Custom AI models
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle2 size={16} className="text-indigo-600" />
                    Dedicated account manager
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle2 size={16} className="text-indigo-600" />
                    API access
                  </li>
                </ul>
                <button className="w-full bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition">
                  Contact Sales
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Simple steps to launch your influencer campaign
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Define Your Goals
                </h3>
                <p className="text-gray-600">
                  Set your campaign objectives and target audience
                </p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Find Influencers</h3>
                <p className="text-gray-600">
                  Our AI matches you with perfect influencers
                </p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Launch Campaign</h3>
                <p className="text-gray-600">
                  Manage and track your campaign progress
                </p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Measure Results</h3>
                <p className="text-gray-600">
                  Analyze performance and optimize
                </p>
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition"
              >
                Start Free Trial
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-2xl font-bold text-white mb-4">
                  Reachly
                </div>
                <p className="text-sm">
                  AI-powered influencer marketing platform for modern brands.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Product</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Case Studies
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white transition">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Security
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center">
              <p className="text-sm">© 2024 Reachly. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
