import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, MessageSquare, Users, Link } from "lucide-react";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Container } from '@/components/common/Container';

const CreatorDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <Container className="py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 gradient-text">Creator Dashboard</h1>
          <p className="text-gray-600">Your influence at a glance</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Reach</CardTitle>
              <Users className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">50.2K</div>
              <p className="text-xs text-gray-500">+12% from last month</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
              <BarChart className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.5%</div>
              <p className="text-xs text-gray-500">Average across platforms</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Brand Messages</CardTitle>
              <MessageSquare className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-gray-500">8 new this week</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
              <Link className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-gray-500">2 pending approvals</p>
            </CardContent>
          </Card>
        </div>

        {/* Profile Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Profile Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue flex items-center justify-center text-white text-4xl font-bold">
                    JD
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-lg">John Doe</h3>
                  <p className="text-gray-500">Travel & Lifestyle Creator</p>
                </div>
                <div className="pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Content Category</span>
                    <span className="font-medium">Travel</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Primary Platform</span>
                    <span className="font-medium">Instagram</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Avg. Watch Time</span>
                    <span className="font-medium">2.5 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Post Frequency</span>
                    <span className="font-medium">3x / week</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Performance Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Engagement Metrics */}
                <div>
                  <h4 className="font-medium mb-4">Engagement Breakdown</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Likes per Post</span>
                        <span className="text-sm text-gray-500">2.5K avg</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-brand-purple h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Comments per Post</span>
                        <span className="text-sm text-gray-500">180 avg</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-brand-blue h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Share Rate</span>
                        <span className="text-sm text-gray-500">15%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-brand-purple h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Performance */}
                <div>
                  <h4 className="font-medium mb-4">Recent Content Performance</h4>
                  <div className="space-y-3">
                    {[
                      { title: "Travel Guide: Hidden Gems in Bali", views: "12.5K", engagement: "8.2%" },
                      { title: "5 Must-Try Local Dishes", views: "10.1K", engagement: "7.5%" },
                      { title: "Adventure Vlog: Mountain Hiking", views: "8.7K", engagement: "6.8%" },
                    ].map((content, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <h5 className="font-medium text-sm">{content.title}</h5>
                          <p className="text-xs text-gray-500">Views: {content.views}</p>
                        </div>
                        <span className="text-sm text-brand-purple font-medium">{content.engagement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default CreatorDashboard; 