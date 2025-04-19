
import React from 'react';
import Card, { CardContent } from '../common/Card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Influence.io has completely transformed our influencer marketing strategy. We've seen a 40% increase in campaign ROI since switching to their platform.",
    author: "Sarah Johnson",
    title: "Marketing Director at FashionBrand",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5
  },
  {
    quote: "As an influencer, I love how easy it is to find brand partnerships that align with my values. The platform is intuitive and the payment process is seamless.",
    author: "Mark Rodriguez",
    title: "Lifestyle Influencer, 500K+ followers",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 5
  },
  {
    quote: "The analytics and reporting features have given us unprecedented insights into our campaigns. We can finally measure true impact beyond vanity metrics.",
    author: "Jennifer Williams",
    title: "CMO at TechStartup",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">What Our Users Say</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Join hundreds of brands and thousands of influencers who trust Influence.io
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} isHoverable className="h-full">
              <CardContent className="flex flex-col h-full">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <blockquote className="text-gray-600 italic mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center mt-auto">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.title}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
