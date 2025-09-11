"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const recentVideos = [
  {
    id: 1,
    title: "10 AI Tools That Will Change Your Life",
    thumbnail: "https://placehold.co/120x67?text=AI+Tools+Video+Thumbnail",
    views: "12.5K",
    duration: "8:42",
    status: "Published",
    publishedAt: "2 days ago"
  },
  {
    id: 2,
    title: "The Future of Automation in Business",
    thumbnail: "https://placehold.co/120x67?text=Automation+Business+Video",
    views: "8.3K",
    duration: "12:15",
    status: "Published",
    publishedAt: "5 days ago"
  },
  {
    id: 3,
    title: "How to Build a SaaS Product in 2024",
    thumbnail: "https://placehold.co/120x67?text=SaaS+Product+Development+Guide",
    views: "15.7K",
    duration: "15:30",
    status: "Published",
    publishedAt: "1 week ago"
  },
  {
    id: 4,
    title: "AI Content Creation Secrets",
    thumbnail: "https://placehold.co/120x67?text=AI+Content+Creation+Tutorial",
    views: "Processing...",
    duration: "10:23",
    status: "Processing",
    publishedAt: "1 hour ago"
  }
];

export function RecentVideos() {
  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-gray-900 dark:text-white">Recent Videos</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Your latest video uploads and their performance
            </CardDescription>
          </div>
          <Link href="/analytics">
            <Button variant="outline" className="border-gray-300 dark:border-gray-600">
              View All
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentVideos.map((video) => (
            <div key={video.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="relative flex-shrink-0">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-20 h-11 object-cover rounded-md"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjY3IiB2aWV3Qm94PSIwIDAgMTIwIDY3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iNjciIGZpbGw9IiNGM0Y0RjYiLz48dGV4dCB4PSI2MCIgeT0iMzMuNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==';
                  }}
                />
                <div className="absolute bottom-1 right-1 bg-black bg-opacity-75 text-white text-xs px-1 rounded">
                  {video.duration}
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {video.title}
                </h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {video.views} views
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {video.publishedAt}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                  video.status === 'Published'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                }`}>
                  {video.status}
                </span>
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                  ⋯
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}