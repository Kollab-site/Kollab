import React from 'react';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Container } from '@/components/common/Container';

const formSchema = z.object({
  creatorType: z.string({
    required_error: "Please select your creator type",
  }),
  contentCategory: z.string({
    required_error: "Please select your content category",
  }),
  platform: z.string({
    required_error: "Please select your primary platform",
  }),
  followersCount: z.string({
    required_error: "Please enter your followers count",
  }),
  avgEngagementRate: z.string({
    required_error: "Please enter your average engagement rate",
  }),
  avgWatchTime: z.string({
    required_error: "Please enter your average watch time",
  }),
  avgLikes: z.string({
    required_error: "Please enter your average likes",
  }),
  avgComments: z.string({
    required_error: "Please enter your average comments",
  }),
  postingFrequency: z.string({
    required_error: "Please select your posting frequency",
  }),
});

const CreatorCampaign = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    navigate('/creator-dashboard');
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <Container className="py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 gradient-text">Start Your Campaign</h1>
          <p className="text-lg text-gray-600 mb-12">
            Help us understand your content and reach better so we can match you with the perfect brand partnerships.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="creatorType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Creator Type</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid sm:grid-cols-2 gap-4"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="brand_ambassador" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Brand Ambassador
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="customer_advocate" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Customer Advocate
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="blogger_vlogger" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Blogger/Vlogger
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="gaming" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Gaming Influencer
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contentCategory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your primary content category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="beauty">Beauty & Makeup</SelectItem>
                        <SelectItem value="fashion">Fashion & Style</SelectItem>
                        <SelectItem value="travel">Travel</SelectItem>
                        <SelectItem value="food">Food & Cooking</SelectItem>
                        <SelectItem value="fitness">Fitness & Health</SelectItem>
                        <SelectItem value="tech">Technology</SelectItem>
                        <SelectItem value="lifestyle">Lifestyle</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="platform"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Primary Platform</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your main social platform" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="youtube">YouTube</SelectItem>
                        <SelectItem value="tiktok">TikTok</SelectItem>
                        <SelectItem value="twitter">Twitter</SelectItem>
                        <SelectItem value="linkedin">LinkedIn</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid sm:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="followersCount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Followers Count</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 50000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="avgEngagementRate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Average Engagement Rate (%)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 3.5" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="avgWatchTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Average Watch Time (minutes)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 2.5" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="avgLikes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Average Likes per Post</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 1000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="avgComments"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Average Comments per Post</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 50" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="postingFrequency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Posting Frequency</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select how often you post" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">2-3 Times per Week</SelectItem>
                        <SelectItem value="biweekly">Once Every Two Weeks</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">Submit Campaign Details</Button>
            </form>
          </Form>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default CreatorCampaign; 