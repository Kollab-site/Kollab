
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <Card className="overflow-hidden shadow-lg border-0 bg-white rounded-xl">
      <div className="aspect-video relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
        <video 
          className="absolute inset-0 w-full h-full object-cover" 
          autoPlay 
          muted 
          loop
          poster="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        >
          <source 
            src="https://player.vimeo.com/external/321962943.sd.mp4?s=c1a19e2bf5703be11835599e87e6384ee6e6e189&profile_id=164&oauth2_token_id=57447761" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h3 className="text-dark text-2xl md:text-3xl font-bold">Get in Touch</h3>
        </div>
      </div>
      <CardContent className="p-6">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-purple focus:ring-brand-purple sm:text-sm px-4 py-2 border"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-purple focus:ring-brand-purple sm:text-sm px-4 py-2 border"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-purple focus:ring-brand-purple sm:text-sm px-4 py-2 border"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-purple focus:ring-brand-purple sm:text-sm px-4 py-2 border"
                ></textarea>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-brand-purple hover:bg-opacity-90 text-white font-medium rounded-lg px-6 py-3 transition-all duration-200"
              >
                Send Message
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </form>
        ) : (
          <div className="text-center py-8">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Thanks for reaching out!</h3>
            <p className="text-gray-600">
              We've received your message and will get back to you within 24 hours.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ContactForm;
