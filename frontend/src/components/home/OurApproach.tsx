
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';

const approaches = [
  {
    title: "Data-Driven Matching",
    description: "We use advanced algorithms and AI to analyze thousands of data points, ensuring the perfect match between brands and influencers. Our platform considers audience demographics, engagement metrics, content quality, and brand alignment to create partnerships that deliver real results.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    imagePosition: "right"
  },
  {
    title: "End-to-End Campaign Management",
    description: "From discovery to results tracking, our platform streamlines the entire influencer marketing process. Create briefs, communicate with creators, approve content, process payments, and measure performance—all in one place, saving you time and resources.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    imagePosition: "left"
  },
  {
    title: "Transparent Analytics",
    description: "Get comprehensive insights into your campaign performance with our detailed analytics dashboard. Track engagement, reach, conversions, and ROI in real-time. Our transparent reporting helps you understand what's working and optimize for better results.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    imagePosition: "right"
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6 }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6 }
  }
};

const OurApproach = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold"
          >
            <span className="gradient-text">Our Approach</span>
          </motion.h2>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-4 text-xl text-gray-600"
          >
            How we're revolutionizing influencer marketing
          </motion.p>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-8"
          >
            <Button 
              variant="primary" 
              rightIcon={<ArrowRight size={20} />}
            >
              Learn More
            </Button>
          </motion.div>
        </div>

        {approaches.map((approach, index) => (
          <div key={index} className="mb-24 last:mb-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {approach.imagePosition === "left" ? (
                <>
                  <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInRight}
                    className="order-2 lg:order-1"
                  >
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-primary rounded-xl opacity-30 blur-xl"></div>
                      <div className="relative rounded-xl overflow-hidden shadow-2xl">
                        <img 
                          src={approach.image} 
                          alt={approach.title} 
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </motion.div>
                  <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInLeft}
                    className="order-1 lg:order-2"
                  >
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">{approach.title}</h3>
                    <Separator className="w-24 h-1 bg-brand-purple mb-6" />
                    <p className="text-lg text-gray-600 mb-8">{approach.description}</p>
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInRight}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">{approach.title}</h3>
                    <Separator className="w-24 h-1 bg-brand-purple mb-6" />
                    <p className="text-lg text-gray-600 mb-8">{approach.description}</p>
                  </motion.div>
                  <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInLeft}
                  >
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-primary rounded-xl opacity-30 blur-xl"></div>
                      <div className="relative rounded-xl overflow-hidden shadow-2xl">
                        <img 
                          src={approach.image} 
                          alt={approach.title} 
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurApproach;
