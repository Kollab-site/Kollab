import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, BarChart2, PieChart, TrendingUp, MessageCircle, Video, Phone, Users, Lightbulb, Target, Layers, Zap, Award } from 'lucide-react';
import TeamMember from '@/components/brands/TeamMember';
import ImpactCard from '@/components/brands/ImpactCard';
import ApproachStep from '@/components/brands/ApproachStep';
import { Container } from '@/components/common/Container';
import ContactForm from '@/components/brands/ContactForm';

const Brands = () => {
  const navigate = useNavigate();

  const impactData = [
    {
      title: "Increased ROI",
      description: "Brands using Kollab see 3-5x higher return on influencer marketing investments",
      icon: <TrendingUp className="text-brand-orange h-10 w-10" />,
      stat: "324%",
      statLabel: "Average ROI"
    },
    {
      title: "Better Engagement",
      description: "Access influencers whose audience actually engages with sponsored content",
      icon: <BarChart2 className="text-brand-purple h-10 w-10" />,
      stat: "87%",
      statLabel: "Higher Engagement"
    },
    {
      title: "Audience Growth",
      description: "Expand your brand's reach to highly targeted audience segments",
      icon: <PieChart className="text-brand-blue h-10 w-10" />,
      stat: "2.4M",
      statLabel: "Average Reach"
    }
  ];

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Former marketing executive with 15+ years helping brands build digital presence",
      imgUrl: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      name: "Sarah Chen",
      role: "Head of Partnerships",
      bio: "Built influencer networks for major brands like Nike and Spotify",
      imgUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
    },
    {
      name: "Marcus Robbins",
      role: "Chief Technology Officer",
      bio: "Tech visionary with background in AI and machine learning algorithms",
      imgUrl: "https://images.unsplash.com/photo-1560250097-0b93528c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    },
    {
      name: "Maya Patel",
      role: "Creative Director",
      bio: "Award-winning designer specializing in digital experiences and brand identity",
      imgUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
    }
  ];

  const approachSteps = [
    {
      title: "Data-Driven Matching",
      description: "Our proprietary algorithm analyzes over 50 data points to find the perfect influencers for your brand",
      icon: <Lightbulb size={36} />,
      color: "from-violet-500 to-purple-500"
    },
    {
      title: "Precision Targeting",
      description: "Target specific demographics, interests, and behaviors to reach your ideal audience",
      icon: <Target size={36} />,
      color: "from-orange-400 to-pink-500"
    },
    {
      title: "Seamless Campaigns",
      description: "Manage all aspects of your campaigns from a single dashboard with powerful automation",
      icon: <Layers size={36} />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Performance Optimization",
      description: "AI-powered insights help optimize your campaigns for maximum impact and ROI",
      icon: <Zap size={36} />,
      color: "from-green-400 to-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section with Animation */}
      <section className="bg-gradient-primary pt-32 pb-16 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover opacity-10"></div>
        <Container className="relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transform Your Brand with Influencer Marketing
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Connect with the perfect influencers to amplify your brand's message and drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-brand-orange hover:bg-opacity-70 text-white border-none" 
                size="lg"
                onClick={() => navigate('/creators-list')}
              >
                Browse Creators
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20" size="lg">
                View Case Studies
              </Button>
            </div>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t"></div>
      </section>

      {/* Business Impact Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Driving Business Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform delivers measurable results that help your brand grow through authentic influencer partnerships.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {impactData.map((item, index) => (
              <ImpactCard 
                key={index} 
                title={item.title} 
                description={item.description} 
                icon={item.icon} 
                stat={item.stat} 
                statLabel={item.statLabel}
                delay={index * 0.1}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're revolutionizing influencer marketing through technology and human expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachSteps.map((step, index) => (
              <ApproachStep
                key={index}
                title={step.title}
                description={step.description}
                icon={step.icon}
                color={step.color}
                delay={index * 0.1}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate experts behind Kollab who are dedicated to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember 
                key={index} 
                name={member.name} 
                role={member.role} 
                bio={member.bio} 
                imageUrl={member.imgUrl}
                delay={index * 0.1}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Talk to Us Section with Video */}
      <section className="py-20 bg-gradient-to-r from-brand-purple/10 to-brand-blue/10">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                Talk to Us
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Ready to transform your influencer marketing strategy? Our team of experts is here to help you get started.
              </p>
              
              <div className="grid gap-6">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
                  <div className="rounded-full bg-brand-purple/10 p-3 mr-4">
                    <MessageCircle className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Chat with Sales</h3>
                    <p className="text-gray-600">Get answers to your questions in real-time</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
                  <div className="rounded-full bg-brand-blue/10 p-3 mr-4">
                    <Video className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Schedule a Demo</h3>
                    <p className="text-gray-600">See the platform in action with a personalized walkthrough</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
                  <div className="rounded-full bg-brand-orange/10 p-3 mr-4">
                    <Phone className="h-6 w-6 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <p className="text-gray-600">Speak directly with our team at (800) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 animate-fade-in">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default Brands;
