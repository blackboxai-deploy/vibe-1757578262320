"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    title: "Total Videos",
    value: "24",
    change: "+12%",
    icon: "📹",
    trend: "up"
  },
  {
    title: "Total Views",
    value: "125.3K",
    change: "+23%",
    icon: "👁️",
    trend: "up"
  },
  {
    title: "Subscribers",
    value: "2.4K",
    change: "+8%",
    icon: "👥",
    trend: "up"
  },
  {
    title: "Revenue",
    value: "$1,234",
    change: "+15%",
    icon: "💰",
    trend: "up"
  },
];

export function OverviewCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {stat.title}
            </CardTitle>
            <span className="text-2xl">{stat.icon}</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {stat.value}
            </div>
            <div className="flex items-center gap-1 mt-1">
              <span className={`text-sm font-medium ${
                stat.trend === 'up' 
                  ? 'text-green-600 dark:text-green-400' 
                  : 'text-red-600 dark:text-red-400'
              }`}>
                {stat.trend === 'up' ? '↗️' : '↘️'} {stat.change}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                from last month
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}