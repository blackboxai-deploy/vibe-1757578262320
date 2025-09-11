"use client";

import { OverviewCards } from "@/components/dashboard/OverviewCards";
import { RecentVideos } from "@/components/dashboard/RecentVideos";
import { AnalyticsChart } from "@/components/dashboard/AnalyticsChart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Welcome back!</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Manage your AI-powered YouTube channel and create amazing videos
          </p>
        </div>
        <Link href="/create">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2">
            <span>+</span>
            Create Video
          </Button>
        </Link>
      </div>

      {/* Quick Stats */}
      <OverviewCards />

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Recent Videos */}
        <div className="lg:col-span-2">
          <RecentVideos />
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
              📹 Quick Actions
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Common tasks and shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link href="/create" className="block">
              <Button variant="outline" className="w-full justify-start gap-2 border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800">
                + New Video
              </Button>
            </Link>
            <Link href="/channel" className="block">
              <Button variant="outline" className="w-full justify-start gap-2 border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800">
                👥 Channel Settings
              </Button>
            </Link>
            <Link href="/analytics" className="block">
              <Button variant="outline" className="w-full justify-start gap-2 border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800">
                📈 View Analytics
              </Button>
            </Link>
            <Link href="/library" className="block">
              <Button variant="outline" className="w-full justify-start gap-2 border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800">
                🎵 Voice Library
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Section */}
      <div className="grid gap-6 md:grid-cols-1">
        <AnalyticsChart />
      </div>
    </div>
  );
}