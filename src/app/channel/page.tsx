"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChannelSettings } from "@/components/youtube/ChannelSettings";
import { UploadManager } from "@/components/youtube/UploadManager";

export default function ChannelPage() {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          YouTube Channel Management
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Connect and manage your YouTube channel for automated video uploads
        </p>
      </div>

      {/* Connection Status */}
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-gray-900 dark:text-white">
            📺 YouTube Integration
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
              isConnected 
                ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
            }`}>
              {isConnected ? 'Connected' : 'Not Connected'}
            </div>
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            {isConnected 
              ? 'Your YouTube channel is connected and ready for automated uploads'
              : 'Connect your YouTube channel to enable automated video publishing'
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!isConnected ? (
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                  How YouTube Integration Works
                </h3>
                <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• Secure OAuth 2.0 authentication with YouTube</li>
                  <li>• Automated video uploads with custom metadata</li>
                  <li>• Scheduling support for timed releases</li>
                  <li>• Channel analytics and performance tracking</li>
                  <li>• Full control over video privacy and settings</li>
                </ul>
              </div>
              
              <Button 
                onClick={() => {
                  // In a real implementation, this would start OAuth flow
                  alert('🔐 YouTube OAuth flow would start here. You would be redirected to YouTube to authorize the app.');
                  setIsConnected(true);
                }}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                🔗 Connect YouTube Channel
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">YT</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">AI Content Creator Channel</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Connected • 2.4K subscribers</p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setIsConnected(false)}
                  className="ml-auto border-gray-300 dark:border-gray-600"
                >
                  Disconnect
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Channel Management Sections */}
      {isConnected && (
        <div className="grid gap-6 lg:grid-cols-2">
          <ChannelSettings />
          <UploadManager />
        </div>
      )}

      {/* YouTube API Permissions */}
      {isConnected && (
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">API Permissions</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Permissions granted to AI YouTube Manager
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400">✓</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Upload Videos</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Create and publish videos</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400">✓</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Manage Metadata</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Edit titles, descriptions, tags</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400">✓</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">View Analytics</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Access performance data</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400">✓</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Schedule Publishing</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Set future release dates</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}