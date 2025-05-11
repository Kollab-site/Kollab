import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    first_name: '',
    last_name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:8000/api/contact-us/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit form');
      }

      const data = await response.json();
      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: data.message || "Your message has been sent successfully.",
        variant: "default",
        duration: 5000,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
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
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first_name">First Name*</Label>
                <Input
                  id="first_name"
                  name="first_name"
                  required
                  value={formState.first_name}
                  onChange={handleChange}
                  placeholder="John"
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last_name">Last Name*</Label>
                <Input
                  id="last_name"
                  name="last_name"
                  required
                  value={formState.last_name}
                  onChange={handleChange}
                  placeholder="Doe"
                  disabled={isSubmitting}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address*</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formState.email}
                onChange={handleChange}
                placeholder="john.doe@example.com"
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">How can we help?*</Label>
              <Textarea
                id="message"
                name="message"
                required
                value={formState.message}
                onChange={handleChange}
                placeholder="Your message..."
                className="min-h-[120px]"
                disabled={isSubmitting}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-brand-purple hover:bg-opacity-90 text-white relative"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
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
            <Button 
              className="mt-6 bg-brand-purple hover:bg-opacity-90 text-white"
              onClick={() => {
                setIsSubmitted(false);
                setFormState({
                  first_name: '',
                  last_name: '',
                  email: '',
                  message: ''
                });
              }}
            >
              Send Another Message
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ContactForm;