
import React from 'react';
import Button from '../common/Button';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const wavePath = "M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,133.3C672,139,768,181,864,186.7C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-b from-indigo-500 to-purple-600 text-white py-20 relative overflow-hidden">
      {/* Wave Background */}
      <svg className="absolute bottom-0 left-0 w-full h-48 fill-white/10" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <motion.path 
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          d={wavePath}
        />
      </svg>
      
      {/* Animated Circles */}
      <motion.div 
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/10 mix-blend-overlay"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      <motion.div 
        className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-white/5 mix-blend-overlay"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Ready to Make Waves in <br />Influencer Marketing?
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-xl text-white/90"
          >
            Join thousands of brands and influencers already using Influence.io to create successful partnerships and drive real results.
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              variant="accent" 
              size="lg"
              rightIcon={<ArrowRight size={20} />}
              className="bg-white text-indigo-600 hover:bg-white/90 shadow-lg"
            >
              Get Started For Free
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              leftIcon={<MessageSquare size={20} />}
              className="backdrop-blur border-white/20 text-white hover:bg-white/20"
            >
              Schedule Demo
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 text-sm text-white/70"
          >
            No credit card required • Free 14-day trial
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
