import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Container } from '@/components/common/Container';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Filter, Users, Search, Instagram, Youtube, Twitter, Linkedin, Star, MessageSquare, Clock, Video } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Sample creator data - in a real app, this would come from a database
const creatorsSampleData = [
  {
    id: '1',
    name: 'John Doe',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'travel',
    platform: 'instagram',
    followers: 25000,
    engagementRate: 3.2,
    avgWatchTime: '2.5 min',
    avgLikes: 1200,
    avgComments: 150,
    postingFrequency: '3x/week',
    bio: 'Travel & Lifestyle Creator showcasing hidden gems around the world',
    socialLinks: {
      instagram: '@johndoe',
      youtube: '@johndoe',
      tiktok: '@johndoe'
    }
  },
  {
    id: '2',
    name: 'Sarah Kim',
    profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'beauty',
    platform: 'youtube',
    followers: 78000,
    engagementRate: 4.5,
    avgWatchTime: '5.2 min',
    avgLikes: 3500,
    avgComments: 280,
    postingFrequency: '2x/week',
    bio: 'Beauty expert sharing makeup tutorials and skincare reviews',
    socialLinks: {
      instagram: '@sarahkim',
      youtube: '@sarahkim',
      tiktok: '@sarahkim'
    }
  },
  // ... other creators with similar structure
];

const CreatorsList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [platformFilter, setPlatformFilter] = useState('all');
  const [followerRange, setFollowerRange] = useState([0, 200000]);
  const [engagementRange, setEngagementRange] = useState([0, 10]);
  const [showFilters, setShowFilters] = useState(true);
  const [showResults, setShowResults] = useState(false);

  const filteredCreators = creatorsSampleData.filter((creator) => {
    const matchesSearch = creator.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          creator.bio.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || creator.category === categoryFilter;
    const matchesPlatform = platformFilter === 'all' || creator.platform === platformFilter;
    const matchesFollowers = creator.followers >= followerRange[0] && creator.followers <= followerRange[1];
    const matchesEngagement = creator.engagementRate >= engagementRange[0] && creator.engagementRate <= engagementRange[1];
    
    return matchesSearch && matchesCategory && matchesPlatform && matchesFollowers && matchesEngagement;
  });

  const handleApplyFilters = () => {
    setShowResults(true);
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setCategoryFilter('all');
    setPlatformFilter('all');
    setFollowerRange([0, 200000]);
    setEngagementRange([0, 10]);
    setShowResults(false);
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'instagram':
        return <Instagram className="h-4 w-4" />;
      case 'youtube':
        return <Youtube className="h-4 w-4" />;
      case 'tiktok':
        return <Video className="h-4 w-4" />;
      case 'twitter':
        return <Twitter className="h-4 w-4" />;
      case 'linkedin':
        return <Linkedin className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <Container className="py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2 gradient-text">Find Creators</h1>
            <p className="text-gray-600 text-lg">Discover and connect with the perfect creators for your brand</p>
          </div>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 border-2 border-brand-purple/20 shadow-md">
          <div className="p-6">
            <div className="flex items-center gap-2 mb-6 text-lg font-medium text-brand-purple">
              <Filter size={20} />
              <h2>Filter Creators</h2>
            </div>
            
            <div className="grid grid-cols-1 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  placeholder="Search creators by name or bio"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="bg-white rounded-lg mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content Category</label>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="beauty">Beauty & Makeup</SelectItem>
                    <SelectItem value="fashion">Fashion & Style</SelectItem>
                    <SelectItem value="travel">Travel</SelectItem>
                    <SelectItem value="food">Food & Cooking</SelectItem>
                    <SelectItem value="fitness">Fitness & Health</SelectItem>
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="lifestyle">Lifestyle</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Platform</label>
                <Select value={platformFilter} onValueChange={setPlatformFilter}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="All Platforms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Platforms</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="youtube">YouTube</SelectItem>
                    <SelectItem value="tiktok">TikTok</SelectItem>
                    <SelectItem value="twitter">Twitter</SelectItem>
                    <SelectItem value="linkedin">LinkedIn</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Followers: {followerRange[0].toLocaleString()} - {followerRange[1].toLocaleString()}
                </label>
                <Slider 
                  defaultValue={[0, 200000]} 
                  max={200000} 
                  step={1000}
                  value={followerRange}
                  onValueChange={setFollowerRange}
                  className="py-4"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Engagement Rate: {engagementRange[0]}% - {engagementRange[1]}%
                </label>
                <Slider 
                  defaultValue={[0, 10]} 
                  max={10} 
                  step={0.1}
                  value={engagementRange}
                  onValueChange={setEngagementRange}
                  className="py-4"
                />
              </div>
            </div>

            <div className="flex gap-3 justify-end">
              <Button variant="outline" onClick={handleResetFilters}>
                Reset Filters
              </Button>
              <Button className="bg-brand-purple hover:bg-brand-purple/90" onClick={handleApplyFilters}>
                Apply Filters
              </Button>
            </div>
          </div>
        </Card>

        {/* Results Section */}
        {showResults && (
          <>
            <div className="flex items-center mb-6 text-gray-600">
              <Users size={16} className="mr-2" />
              <span>Showing {filteredCreators.length} creators</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCreators.map((creator) => (
                <Card key={creator.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate(`/creator-dashboard?id=${creator.id}`)}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={creator.profileImage} />
                        <AvatarFallback>{creator.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-lg">{creator.name}</h3>
                          <Badge variant="outline" className="flex items-center gap-1">
                            {getPlatformIcon(creator.platform)}
                            {creator.platform}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{creator.bio}</p>
                        <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4 text-gray-500" />
                            <span>{creator.followers.toLocaleString()} followers</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-gray-500" />
                            <span>{creator.engagementRate}% engagement</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-4 w-4 text-gray-500" />
                            <span>{creator.avgLikes.toLocaleString()} avg likes</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-gray-500" />
                            <span>{creator.postingFrequency}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {filteredCreators.length === 0 && (
                <div className="col-span-full py-16 text-center">
                  <h3 className="text-xl font-medium text-gray-700 mb-2">No creators found</h3>
                  <p className="text-gray-500">Try adjusting your filters or search terms</p>
                </div>
              )}
            </div>
          </>
        )}

        {!showResults && (
          <div className="text-center py-10">
            <Users size={48} className="mx-auto mb-4 text-brand-purple opacity-50" />
            <h3 className="text-xl font-medium text-gray-700 mb-2">Apply filters to see creators</h3>
            <p className="text-gray-500">Use the filters above to find creators that match your requirements</p>
          </div>
        )}
      </Container>

      <Footer />
    </div>
  );
};

export default CreatorsList; 