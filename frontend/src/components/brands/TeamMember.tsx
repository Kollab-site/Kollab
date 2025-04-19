
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Linkedin, Twitter } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  delay?: number;
}

const TeamMember = ({ name, role, bio, imageUrl, delay = 0 }: TeamMemberProps) => {
  return (
    <Card 
      className={cn(
        "overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
        "opacity-0 animate-fade-in"
      )}
      style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
    >
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
        />
      </div>
      <CardContent className="p-5">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-brand-purple font-medium mb-2">{role}</p>
        <p className="text-gray-600 text-sm mb-4">{bio}</p>
        <div className="flex space-x-2">
          <a href="#" className="text-gray-400 hover:text-brand-purple transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">
            <Twitter size={18} />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMember;
