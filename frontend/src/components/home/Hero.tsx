
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 transform">
        <div className="h-96 w-96 rounded-full bg-gradient-primary opacity-10 blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 transform">
        <div className="h-96 w-96 rounded-full bg-brand-orange opacity-10 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="gradient-text">Smart Influencer Marketing</span>{" "}
              <span className="block mt-2">Made Simple</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0"
            >
              Connect brands with the perfect influencers using data-driven matching. Simplify campaigns, amplify results.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg" 
                variant="primary"
                rightIcon={<ArrowRight size={20} />}
              >
                Get Started
              </Button>
              {/* <Button 
                size="lg" 
                variant="secondary"
              >
                Book a Demo
              </Button> */}
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="mt-6 text-sm text-gray-500"
            >
              {/* No credit card required • Free 14-day trial */}
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-primary rounded-xl opacity-20 blur-xl"></div>
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
              <motion.img 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Influence.io platform" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Animated floating elements */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.6,
                ease: "easeOut"
              }}
              className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-white rounded-lg shadow-lg p-4 w-36 z-20"
            >
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-lg font-bold">+</span>
                </div>
                <div className="ml-3">
                  <div className="text-xs text-gray-500">Engagement</div>
                  <div className="text-sm font-bold text-gray-900">+27%</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.9,
                ease: "easeOut"
              }}
              className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white rounded-lg shadow-lg p-4 w-40 z-10"
            >
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-brand-purple text-lg font-bold">$</span>
                </div>
                <div className="ml-3">
                  <div className="text-xs text-gray-500">ROI</div>
                  <div className="text-sm font-bold text-gray-900">+124%</div>
                </div>
              </div>
            </motion.div>
            
            {/* Additional floating element */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.2,
                ease: "easeOut"
              }}
              className="absolute top-1/2 -right-3 md:-right-20 transform -translate-y-1/2 bg-white rounded-lg shadow-lg p-4 w-38 z-10"
            >
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-lg font-bold">★</span>
                </div>
                <div className="ml-3">
                  <div className="text-xs text-gray-500">Conversion Rate</div>
                  <div className="text-sm font-bold text-gray-900">+68% increase</div>
                </div>
              </div>
            </motion.div>

            {/* Pulse animation dot */}
            <div className="absolute top-1/4 right-1/4">
              <div className="w-3 h-3 bg-brand-purple rounded-full"></div>
              <div className="w-3 h-3 bg-brand-purple rounded-full absolute animate-ping opacity-75"></div>
            </div>
            
            <div className="absolute bottom-1/4 left-1/4">
              <div className="w-3 h-3 bg-brand-orange rounded-full"></div>
              <div className="w-3 h-3 bg-brand-orange rounded-full absolute animate-ping opacity-75"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
