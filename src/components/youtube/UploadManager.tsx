"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface UploadJob {
  id: string;
  title: string;
  status: 'queued' | 'uploading' | 'processing' | 'completed' | 'failed';
  progress: number;
  createdAt: string;
  videoUrl?: string;
}

export function UploadManager() {
  const [uploads] = useState<UploadJob[]>([
    {
      id: '1',
      title: '10 AI Tools That Will Change Your Life',
      status: 'completed',
      progress: 100,
      createdAt: '2024-01-15 14:30',
      videoUrl: 'https://youtube.com/watch?v=example1'
    },
    {
      id: '2',
      title: 'The Future of Automation in Business',
      status: 'processing',
      progress: 75,
      createdAt: '2024-01-15 15:45'
    },
    {
      id: '3',
      title: 'How to Build a SaaS Product in 2024',
      status: 'queued',
      progress: 0,
      createdAt: '2024-01-15 16:20'
    }
  ]);

  const getStatusColor = (status: UploadJob['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'processing':
      case 'uploading':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'failed':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getStatusIcon = (status: UploadJob['status']) => {
    switch (status) {
      case 'completed':
        return '✅';
      case 'processing':
        return '⚙️';
      case 'uploading':
        return '⬆️';
      case 'failed':
        return '❌';
      default:
        return '⏳';
    }
  };

  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-gray-900 dark:text-white">
          Upload Queue
          <Button
            size="sm"
            onClick={() => alert('Upload queue refreshed!')}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            🔄 Refresh
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {uploads.map((upload) => (
            <div
              key={upload.id}
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg space-y-3"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                    {upload.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`px-2 py-1 text-xs rounded-full font-medium ${getStatusColor(upload.status)}`}>
                      {getStatusIcon(upload.status)} {upload.status.charAt(0).toUpperCase() + upload.status.slice(1)}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {upload.createdAt}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {upload.videoUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(upload.videoUrl, '_blank')}
                      className="border-gray-300 dark:border-gray-600"
                    >
                      🔗 View
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => alert('More options...')}
                    className="border-gray-300 dark:border-gray-600"
                  >
                    ⋯
                  </Button>
                </div>
              </div>

              {/* Progress Bar */}
              {upload.status !== 'completed' && upload.status !== 'failed' && (
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      Progress
                    </span>
                    <span className="text-xs font-medium text-gray-900 dark:text-white">
                      {upload.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${upload.progress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Upload Details */}
              {upload.status === 'processing' && (
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  YouTube is processing your video. This may take a few minutes...
                </div>
              )}

              {upload.status === 'failed' && (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-red-600 dark:text-red-400">
                    Upload failed. Network error.
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => alert('Retrying upload...')}
                    className="text-xs border-red-300 text-red-600 hover:bg-red-50 dark:border-red-600 dark:text-red-400"
                  >
                    🔄 Retry
                  </Button>
                </div>
              )}
            </div>
          ))}

          {uploads.length === 0 && (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">📺</div>
              <div className="text-gray-600 dark:text-gray-400">
                <h3 className="text-lg font-medium mb-2">No uploads yet</h3>
                <p className="text-sm">
                  Generated videos will appear here for upload to YouTube
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Bulk Actions */}
        {uploads.length > 0 && (
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-6">
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => alert('Retrying all failed uploads...')}
                className="border-gray-300 dark:border-gray-600"
              >
                🔄 Retry Failed
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => alert('Clearing completed uploads...')}
                className="border-gray-300 dark:border-gray-600"
              >
                🗑️ Clear Completed
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => alert('Pausing upload queue...')}
                className="border-gray-300 dark:border-gray-600"
              >
                ⏸️ Pause Queue
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}