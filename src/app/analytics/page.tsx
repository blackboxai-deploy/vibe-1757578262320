"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const analyticsData = {
  overview: {
    totalViews: 125300,
    totalSubscribers: 2400,
    totalVideos: 24,
    averageViewDuration: "4:32",
    engagement: 8.7
  },
  recentVideos: [
    {
      title: "10 AI Tools That Will Change Your Life",
      views: 12500,
      likes: 890,
      comments: 124,
      ctr: 8.2,
      avgViewDuration: "6:15"
    },
    {
      title: "The Future of Automation in Business", 
      views: 8300,
      likes: 654,
      comments: 89,
      ctr: 7.1,
      avgViewDuration: "5:42"
    },
    {
      title: "How to Build a SaaS Product in 2024",
      views: 15700,
      likes: 1200,
      comments: 203,
      ctr: 9.4,
      avgViewDuration: "8:20"
    }
  ],
  demographics: {
    gender: { male: 65, female: 35 },
    age: {
      "18-24": 15,
      "25-34": 35,
      "35-44": 30,
      "45-54": 15,
      "55+": 5
    },
    topCountries: [
      { country: "United States", percentage: 45 },
      { country: "United Kingdom", percentage: 12 },
      { country: "Canada", percentage: 8 },
      { country: "Germany", percentage: 7 },
      { country: "Australia", percentage: 6 }
    ]
  }
};

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Channel Analytics
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Track your channel performance and audience insights
          </p>
        </div>
        <Button
          onClick={() => alert('Analytics data refreshed!')}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          🔄 Refresh Data
        </Button>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-600 dark:text-gray-400">Total Views</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {analyticsData.overview.totalViews.toLocaleString()}
            </div>
            <div className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1 mt-1">
              ↗️ +12% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-600 dark:text-gray-400">Subscribers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {analyticsData.overview.totalSubscribers.toLocaleString()}
            </div>
            <div className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1 mt-1">
              ↗️ +8% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-600 dark:text-gray-400">Total Videos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {analyticsData.overview.totalVideos}
            </div>
            <div className="text-xs text-blue-600 dark:text-blue-400 flex items-center gap-1 mt-1">
              📹 {Math.round(analyticsData.overview.totalViews / analyticsData.overview.totalVideos).toLocaleString()} avg views/video
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-600 dark:text-gray-400">Avg Duration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {analyticsData.overview.averageViewDuration}
            </div>
            <div className="text-xs text-yellow-600 dark:text-yellow-400 flex items-center gap-1 mt-1">
              ⏱️ View time per viewer
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-600 dark:text-gray-400">Engagement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {analyticsData.overview.engagement}%
            </div>
            <div className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1 mt-1">
              💬 Likes + Comments rate
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Videos Performance */}
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">Recent Videos Performance</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Key metrics for your latest uploads
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 text-gray-600 dark:text-gray-400">Video Title</th>
                  <th className="text-right py-3 text-gray-600 dark:text-gray-400">Views</th>
                  <th className="text-right py-3 text-gray-600 dark:text-gray-400">Likes</th>
                  <th className="text-right py-3 text-gray-600 dark:text-gray-400">Comments</th>
                  <th className="text-right py-3 text-gray-600 dark:text-gray-400">CTR</th>
                  <th className="text-right py-3 text-gray-600 dark:text-gray-400">Avg Duration</th>
                </tr>
              </thead>
              <tbody>
                {analyticsData.recentVideos.map((video, index) => (
                  <tr key={index} className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 text-gray-900 dark:text-white">{video.title}</td>
                    <td className="text-right py-3 text-gray-900 dark:text-white font-medium">
                      {video.views.toLocaleString()}
                    </td>
                    <td className="text-right py-3 text-gray-900 dark:text-white">
                      {video.likes.toLocaleString()}
                    </td>
                    <td className="text-right py-3 text-gray-900 dark:text-white">
                      {video.comments}
                    </td>
                    <td className="text-right py-3">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        video.ctr >= 8 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                          : video.ctr >= 6
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                          : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                      }`}>
                        {video.ctr}%
                      </span>
                    </td>
                    <td className="text-right py-3 text-gray-900 dark:text-white">
                      {video.avgViewDuration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Demographics */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Audience Demographics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Gender */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Gender Distribution</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Male</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{analyticsData.demographics.gender.male}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${analyticsData.demographics.gender.male}%` }}></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Female</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{analyticsData.demographics.gender.female}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-pink-500 h-2 rounded-full" style={{ width: `${analyticsData.demographics.gender.female}%` }}></div>
                </div>
              </div>
            </div>

            {/* Age Groups */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Age Distribution</h4>
              <div className="space-y-2">
                {Object.entries(analyticsData.demographics.age).map(([age, percentage]) => (
                  <div key={age} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{age}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: `${percentage * 2.5}%` }}></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white w-8">{percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Top Countries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analyticsData.demographics.topCountries.map((country, index) => (
                <div key={country.country} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{index === 0 ? '🇺🇸' : index === 1 ? '🇬🇧' : index === 2 ? '🇨🇦' : index === 3 ? '🇩🇪' : '🇦🇺'}</span>
                    <span className="text-sm text-gray-900 dark:text-white">{country.country}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${country.percentage * 2}%` }}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white w-8">{country.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}