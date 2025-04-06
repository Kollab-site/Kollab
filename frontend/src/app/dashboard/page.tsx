"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  // Show loading state while checking authentication
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  // If not authenticated, don't render anything (will redirect in useEffect)
  if (status === "unauthenticated") {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {session?.user?.name || "User"}!
        </h1>
        <p className="mt-2 text-gray-600">
          Here's what's happening with your influencer marketing campaigns.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-600">
                Active Influencers
              </h2>
              <p className="text-2xl font-semibold text-gray-900">24</p>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-sm text-green-600">
              ↑ 12% from last month
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-600">
                Total Revenue
              </h2>
              <p className="text-2xl font-semibold text-gray-900">$12,450</p>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-sm text-green-600">↑ 8% from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-600">
                Total Impressions
              </h2>
              <p className="text-2xl font-semibold text-gray-900">1.2M</p>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-sm text-green-600">
              ↑ 15% from last month
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-600">
                Engagement Rate
              </h2>
              <p className="text-2xl font-semibold text-gray-900">4.8%</p>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-sm text-green-600">↑ 2% from last month</span>
          </div>
        </div>
      </div>

      {/* Recent Campaigns */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">
            Recent Campaigns
          </h2>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            {recentCampaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-indigo-600 font-medium">
                      {campaign.name.charAt(0)}
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      {campaign.name}
                    </h3>
                    <p className="text-sm text-gray-500">{campaign.status}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      campaign.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {campaign.status}
                  </span>
                  <Link
                    href={`/dashboard/campaigns/${campaign.id}`}
                    className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Create New Campaign
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Start a new influencer marketing campaign and reach your target
            audience.
          </p>
          <Link
            href="/dashboard/campaigns/new"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Campaign
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Find Influencers
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Discover and connect with influencers that match your brand.
          </p>
          <Link
            href="/dashboard/influencers"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Browse Influencers
          </Link>
        </div>
      </div>
    </div>
  );
}

const recentCampaigns = [
  {
    id: 1,
    name: "Summer Collection Launch",
    status: "Active",
  },
  {
    id: 2,
    name: "Brand Awareness Campaign",
    status: "Active",
  },
  {
    id: 3,
    name: "Product Review Series",
    status: "Completed",
  },
  {
    id: 4,
    name: "Holiday Special",
    status: "Scheduled",
  },
];
