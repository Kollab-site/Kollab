
import React from 'react';
import { Users, BarChart3, MessageSquare, CreditCard, Search, Award } from 'lucide-react';
import Card, { CardContent } from '../common/Card';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Users className="w-10 h-10 text-brand-purple" />,
    title: 'Smart Matching',
    description: 'Our AI-powered algorithm finds the perfect influencers for your brand based on audience demographics, engagement rates, and content quality.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-brand-purple" />,
    title: 'Performance Analytics',
    description: 'Track campaign performance in real-time with comprehensive analytics on engagement, reach, conversions, and ROI.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    icon: <MessageSquare className="w-10 h-10 text-brand-purple" />,
    title: 'Streamlined Communication',
    description: 'Manage all your influencer conversations in one place with our built-in messaging system, proposal tracking, and contract management.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    icon: <CreditCard className="w-10 h-10 text-brand-purple" />,
    title: 'Secure Payments',
    description: 'Handle payments securely with automated invoicing, milestone-based releases, and complete payment history tracking.',
    image: 'https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    icon: <Search className="w-10 h-10 text-brand-purple" />,
    title: 'Advanced Search & Filters',
    description: 'Find influencers by niche, location, engagement rate, audience size, and dozens of other criteria to target your perfect audience.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    icon: <Award className="w-10 h-10 text-brand-purple" />,
    title: 'Authenticity Verification',
    description: 'We verify the authenticity of all influencers on our platform, ensuring real followers and genuine engagement metrics.',
    image: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const Features = () => {
  return (
    <section className="bg-gray-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            <span className="gradient-text">Powerful Features</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-xl text-gray-600"
          >
            Everything you need to run successful influencer marketing campaigns
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card isHoverable className="flex flex-col h-full overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6">
                      <div className="bg-white rounded-full p-3 w-14 h-14 flex items-center justify-center mb-3">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    </div>
                  </div>
                </div>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
