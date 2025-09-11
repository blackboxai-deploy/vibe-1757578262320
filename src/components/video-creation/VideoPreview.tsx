"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface VideoConfig {
  niche: string;
  topic: string;
  script: string;
  voice: { id: string; name: string; accent: string };
  music: { id: string; name: string; genre: string };
  title: string;
  description: string;
  tags: string[];
}

interface VideoPreviewProps {
  config: VideoConfig;
  updateConfig: (updates: Partial<VideoConfig>) => void;
}

export function VideoPreview({ config, updateConfig }: VideoPreviewProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);

  const generateVideo = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch("/api/generate-video", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config),
      });

      const data = await response.json();
      if (data.videoUrl) {
        setGeneratedVideo(data.videoUrl);
      } else {
        throw new Error(data.error || "Failed to generate video");
      }
    } catch (error) {
      console.error("Error generating video:", error);
      alert("Failed to generate video. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const estimatedDuration = Math.ceil(config.script.length / 150); // ~150 words per minute

  return (
    <div className="space-y-6">
      {/* Video Configuration Summary */}
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">Video Configuration</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Niche</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">{config.niche}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-2xl">📝</span>
                <div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Topic</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{config.topic || "Not specified"}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-2xl">⏱️</span>
                <div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Duration</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">~{estimatedDuration} minutes</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎤</span>
                <div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Voice</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {config.voice.name} ({config.voice.accent})
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎵</span>
                <div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Music</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {config.music.name || "None selected"}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Script Length</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {config.script.split(/\s+/).length} words
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Video Generation */}
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-gray-900 dark:text-white">
            Generate Video
            <Button
              onClick={generateVideo}
              disabled={isGenerating || !config.script || !config.voice.id}
              className="bg-purple-600 hover:bg-purple-700 text-white disabled:opacity-50"
            >
              {isGenerating ? "🎬 Generating..." : "🎬 Generate Video"}
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isGenerating && (
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                  <div className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>Generating your video...</strong>
                    <div className="mt-1 text-xs opacity-75">
                      This may take 5-10 minutes depending on video length
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Generation Steps */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  Processing script
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse"></div>
                  Generating voice narration
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                  Creating visual content
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                  Mixing audio and video
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                  Finalizing video
                </div>
              </div>
            </div>
          )}

          {/* Generated Video Preview */}
          {generatedVideo && (
            <div className="space-y-4">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎉</span>
                  <div className="text-sm text-green-800 dark:text-green-200">
                    <strong>Video generated successfully!</strong>
                    <div className="mt-1 text-xs opacity-75">
                      Your AI-powered video is ready for preview and publishing
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Video Player */}
              <div className="bg-black rounded-lg aspect-video flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl mb-4">📹</div>
                  <div className="text-lg font-medium">Video Preview</div>
                  <div className="text-sm opacity-75 mt-2">
                    {config.topic}
                  </div>
                  <div className="mt-4">
                    <Button 
                      className="bg-white text-black hover:bg-gray-100"
                      onClick={() => alert("▶️ Video player would show the generated video here")}
                    >
                      ▶️ Play Video
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Video Actions */}
              <div className="flex items-center gap-3">
                <Button 
                  variant="outline"
                  className="border-gray-300 dark:border-gray-600"
                  onClick={() => alert("📥 Video download would start here")}
                >
                  📥 Download
                </Button>
                <Button 
                  variant="outline"
                  className="border-gray-300 dark:border-gray-600"
                  onClick={() => generateVideo()}
                >
                  🔄 Regenerate
                </Button>
                <Button 
                  variant="outline"
                  className="border-gray-300 dark:border-gray-600"
                  onClick={() => alert("✏️ Video editor would open here")}
                >
                  ✏️ Edit
                </Button>
              </div>
            </div>
          )}

          {/* Generation Requirements */}
          {!isGenerating && !generatedVideo && (
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                  Ready to Generate
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full ${config.script ? 'bg-green-500' : 'bg-red-500'} flex items-center justify-center`}>
                      <span className="text-white text-xs">{config.script ? '✓' : '✗'}</span>
                    </div>
                    <span className={config.script ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}>
                      Script content ({config.script ? 'Ready' : 'Missing'})
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full ${config.voice.id ? 'bg-green-500' : 'bg-red-500'} flex items-center justify-center`}>
                      <span className="text-white text-xs">{config.voice.id ? '✓' : '✗'}</span>
                    </div>
                    <span className={config.voice.id ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}>
                      Voice selection ({config.voice.id ? 'Ready' : 'Missing'})
                    </span>
                  </div>
                </div>
              </div>

              {(!config.script || !config.voice.id) && (
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Please complete the previous steps to generate your video.
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Video Metadata Preview */}
      {generatedVideo && (
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Video Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Suggested Title
                </label>
                <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-700 rounded text-sm text-gray-900 dark:text-white">
                  {config.topic}
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Video Duration
                </label>
                <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-700 rounded text-sm text-gray-900 dark:text-white">
                  {estimatedDuration}:00
                </div>
              </div>
              
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Suggested Description
                </label>
                <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-700 rounded text-sm text-gray-900 dark:text-white">
                  {config.script.substring(0, 150)}...
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}