
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, BarChart2, MessageCircle, Clock, PieChart, TrendingUp, Video, Phone, UserPlus, Zap, Target, Layers, Award } from 'lucide-react';
import TeamMember from '@/components/brands/TeamMember';
import ImpactCard from '@/components/brands/ImpactCard';
import ApproachStep from '@/components/brands/ApproachStep';
import { Container } from '@/components/common/Container';
import ContactForm from '@/components/brands/ContactForm';

const Creators = () => {
  const impactData = [
    {
      title: "Higher Earnings",
      description: "Creators on Influence.io earn 40% more than on traditional platforms",
      icon: <TrendingUp className="text-brand-blue h-10 w-10" />,
      stat: "40%",
      statLabel: "More Revenue"
    },
    {
      title: "Brand Partnerships",
      description: "Access exclusive brand deals matched to your audience and content style",
      icon: <BarChart2 className="text-brand-purple h-10 w-10" />,
      stat: "3x",
      statLabel: "More Opportunities"
    },
    {
      title: "Audience Growth",
      description: "Leverage partnerships to grow your following with targeted campaigns",
      icon: <UserPlus className="text-brand-orange h-10 w-10" />,
      stat: "25%",
      statLabel: "Faster Growth"
    }
  ];

  const teamMembers = [
    {
      name: "Maria Rodriguez",
      role: "Creator Success Manager",
      bio: "Former content creator with 1M+ followers who now helps creators optimize their partnerships",
      imgUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    },
    {
      name: "David Kim",
      role: "Content Strategy Director",
      bio: "Developed content strategies for top YouTubers and TikTok creators",
      imgUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    },
    {
      name: "Aisha Johnson",
      role: "Partnership Specialist",
      bio: "Negotiated over $5M in creator contracts with leading global brands",
      imgUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    },
    {
      name: "Thomas Wright",
      role: "Analytics Lead",
      bio: "Data scientist specialized in content performance and audience engagement metrics",
      imgUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    }
  ];

  const approachSteps = [
    {
      title: "Personalized Matching",
      description: "We analyze your content style, values, and audience demographics to match you with perfect brand partners",
      icon: <Target size={36} />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Simplified Negotiations",
      description: "Our platform handles contract details, payment terms, and deliverables with transparent terms",
      icon: <Award size={36} />,
      color: "from-violet-500 to-purple-500"
    },
    {
      title: "Performance Analytics",
      description: "Track the impact of your brand collaborations with detailed metrics and audience insights",
      icon: <BarChart2 size={36} />,
      color: "from-orange-400 to-pink-500"
    },
    {
      title: "Growth Acceleration",
      description: "Get personal coaching and strategy sessions to maximize your content impact and earnings",
      icon: <Zap size={36} />,
      color: "from-green-400 to-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section with Animation */}
      <section className="bg-gradient-to-r from-brand-dark to-brand-blue pt-32 pb-16 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover opacity-10"></div>
        <Container className="relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Turn Your Influence Into Income
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Connect with brands that value your unique voice and audience. Maximize your earning potential while staying true to your content vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-brand-orange hover:bg-opacity-70 text-white border-none" size="lg">
                Join as Creator
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20" size="lg">
                See Success Stories
              </Button>
            </div>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 w-full h-12 "></div>
      </section>

      {/* Business Impact Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Create More Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform helps creators find the right partnerships and maximize their influence and earnings.
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
              How We Help Creators
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've built a platform that puts creators first, with tools designed to enhance your influence.
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

      {/* Statistics Banner */}
      <section className="py-16 bg-gradient-to-r from-brand-purple to-brand-blue text-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in" style={{ animationDelay: "0s" }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">15K+</div>
              <div className="text-white/80">Active Creators</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">$25M</div>
              <div className="text-white/80">Creator Earnings</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">850+</div>
              <div className="text-white/80">Brand Partners</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">3.2B</div>
              <div className="text-white/80">Audience Reach</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Your Creator Success Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experts dedicated to helping you grow your influence and income.
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
      <section className="py-20 bg-gradient-to-r from-brand-blue/10 to-brand-purple/10">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                Let's Connect
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Ready to take your creator career to the next level? Our team is here to answer your questions and help you get started.
              </p>
              
              <div className="grid gap-6">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
                  <div className="rounded-full bg-brand-blue/10 p-3 mr-4">
                    <MessageCircle className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Chat with a Creator Advisor</h3>
                    <p className="text-gray-600">Get personalized guidance for your content strategy</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
                  <div className="rounded-full bg-brand-orange/10 p-3 mr-4">
                    <Video className="h-6 w-6 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Schedule a Demo</h3>
                    <p className="text-gray-600">See how the platform can work for your specific content niche</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
                  <div className="rounded-full bg-brand-purple/10 p-3 mr-4">
                    <Clock className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Fast Application</h3>
                    <p className="text-gray-600">Get approved in as little as 24 hours and start receiving offers</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 animate-fade-in">
              <Card className="overflow-hidden shadow-lg border-0 bg-white rounded-xl">
                <div className="aspect-video relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/80 to-brand-purple/80 z-10"></div>
                  <video 
                    className="absolute inset-0 w-full h-full object-cover" 
                    autoPlay 
                    muted 
                    loop
                    poster="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  >
                    <source 
                      src="https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882" 
                      type="video/mp4" 
                    />
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <h3 className="text-white text-2xl md:text-3xl font-bold">Creator Stories</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Hear from successful creators</h3>
                    <p className="text-gray-600">
                      "Influence.io transformed my creator business. I was able to increase my brand deals by 300% in just the first 6 months, all while staying true to my content vision."
                    </p>
                    <div className="flex items-center">
                      <img 
                        src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                        alt="Creator testimonial" 
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <p className="font-medium">Jamie Chen</p>
                        <p className="text-sm text-gray-500">1.2M Followers • Lifestyle Creator</p>
                      </div>
                    </div>
                    <Button className="w-full bg-brand-purple hover:bg-opacity-90 text-white">
                      Watch More Stories
                      <Video className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                Apply to Join Our Creator Network
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We're selective about who we work with to ensure quality partnerships. Fill out the form and our team will review your application.
              </p>
              
              <div className="bg-gradient-to-br from-brand-purple/5 to-brand-blue/5 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-xl mb-4">Creator Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="rounded-full bg-green-100 p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span>Minimum of 10,000 followers on at least one platform</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-green-100 p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span>Consistent posting schedule (at least weekly content)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-green-100 p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span>Engagement rate of at least 2% on recent content</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-green-100 p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span>Content that aligns with brand safety guidelines</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default Creators;
