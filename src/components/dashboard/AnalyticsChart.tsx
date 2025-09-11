"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const chartData = [
  { month: "Jan", views: 2400, subscribers: 240 },
  { month: "Feb", views: 3200, subscribers: 320 },
  { month: "Mar", views: 2800, subscribers: 180 },
  { month: "Apr", views: 4200, subscribers: 420 },
  { month: "May", views: 5100, subscribers: 510 },
  { month: "Jun", views: 6200, subscribers: 380 },
];

export function AnalyticsChart() {
  const maxViews = Math.max(...chartData.map(d => d.views));
  const maxSubscribers = Math.max(...chartData.map(d => d.subscribers));

  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-white">Channel Analytics</CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          Monthly views and subscriber growth over the past 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Legend */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Views</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Subscribers</span>
            </div>
          </div>

          {/* Chart */}
          <div className="h-64 flex items-end justify-between gap-4">
            {chartData.map((data) => (
              <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex flex-col items-center gap-1 h-48">
                  {/* Views Bar */}
                  <div className="w-full relative flex flex-col justify-end h-full">
                    <div
                      className="bg-blue-500 rounded-t-sm transition-all duration-300 hover:bg-blue-600"
                      style={{
                        height: `${(data.views / maxViews) * 70}%`,
                        minHeight: '4px'
                      }}
                      title={`${data.views.toLocaleString()} views`}
                    ></div>
                  </div>
                  
                  {/* Subscribers Bar */}
                  <div className="w-full relative flex flex-col justify-end h-full">
                    <div
                      className="bg-green-500 rounded-t-sm transition-all duration-300 hover:bg-green-600"
                      style={{
                        height: `${(data.subscribers / maxSubscribers) * 70}%`,
                        minHeight: '4px'
                      }}
                      title={`${data.subscribers} subscribers`}
                    ></div>
                  </div>
                </div>
                
                {/* Month Label */}
                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  {data.month}
                </div>
                
                {/* Values */}
                <div className="text-center space-y-1">
                  <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    {(data.views / 1000).toFixed(1)}K
                  </div>
                  <div className="text-xs text-green-600 dark:text-green-400 font-medium">
                    {data.subscribers}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900 dark:text-white">
                {chartData.reduce((acc, curr) => acc + curr.views, 0).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900 dark:text-white">
                {chartData.reduce((acc, curr) => acc + curr.subscribers, 0).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">New Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900 dark:text-white">
                {((chartData[chartData.length - 1].views - chartData[0].views) / chartData[0].views * 100).toFixed(1)}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Growth Rate</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}