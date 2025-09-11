"use client";

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

interface MusicSelectorProps {
  config: VideoConfig;
  updateConfig: (updates: Partial<VideoConfig>) => void;
}

const musicLibrary = [
  {
    id: "corporate-upbeat",
    name: "Corporate Success",
    genre: "Corporate",
    mood: "Upbeat, Motivational",
    duration: "3:45",
    description: "Perfect for business and professional content",
    icon: "💼"
  },
  {
    id: "tech-ambient",
    name: "Digital Future",
    genre: "Electronic",
    mood: "Modern, Tech",
    duration: "4:20",
    description: "Ideal for technology and AI-focused videos",
    icon: "🔮"
  },
  {
    id: "acoustic-warm",
    name: "Gentle Thoughts",
    genre: "Acoustic",
    mood: "Warm, Friendly",
    duration: "3:30",
    description: "Great for lifestyle and personal content",
    icon: "🎸"
  },
  {
    id: "cinematic-epic",
    name: "Rising Action",
    genre: "Cinematic",
    mood: "Epic, Dramatic",
    duration: "5:10",
    description: "Perfect for storytelling and dramatic content",
    icon: "🎬"
  },
  {
    id: "lo-fi-chill",
    name: "Study Vibes",
    genre: "Lo-Fi",
    mood: "Relaxed, Focus",
    duration: "2:55",
    description: "Excellent for educational and tutorial content",
    icon: "📚"
  },
  {
    id: "energetic-pop",
    name: "Feel Good",
    genre: "Pop",
    mood: "Energetic, Happy",
    duration: "3:15",
    description: "Great for entertainment and upbeat content",
    icon: "🎉"
  }
];

const musicSettings = {
  volume: ["10%", "25%", "50%", "75%", "100%"],
  fadeIn: ["None", "1s", "2s", "3s"],
  fadeOut: ["None", "1s", "2s", "3s"]
};

export function MusicSelector({ config, updateConfig }: MusicSelectorProps) {
  const selectMusic = (music: typeof musicLibrary[0]) => {
    updateConfig({
      music: {
        id: music.id,
        name: music.name,
        genre: music.genre
      }
    });
  };

  return (
    <div className="space-y-6">
      {/* Music Library */}
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">Background Music</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {musicLibrary.map((music) => (
              <div
                key={music.id}
                onClick={() => selectMusic(music)}
                className={`p-4 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                  config.music.id === music.id
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-md"
                    : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {music.name}
                    </h3>
                    <span className="text-2xl">{music.icon}</span>
                  </div>
                  
                  <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <div><strong>Genre:</strong> {music.genre}</div>
                    <div><strong>Mood:</strong> {music.mood}</div>
                    <div><strong>Duration:</strong> {music.duration}</div>
                  </div>
                  
                  <div className="text-sm text-gray-700 dark:text-gray-300">
                    {music.description}
                  </div>
                  
                  <div className="pt-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="w-full border-gray-300 dark:border-gray-600"
                      onClick={(e) => {
                        e.stopPropagation();
                        alert("🎵 Music preview would play here in a real implementation");
                      }}
                    >
                      🎵 Preview
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Music Option */}
          <div className="mt-4">
            <div
              onClick={() => updateConfig({ music: { id: "none", name: "No Music", genre: "None" } })}
              className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                config.music.id === "none"
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                  : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">🔇</span>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">No Background Music</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Voice-only narration</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Music Settings */}
      {config.music.id && config.music.id !== "none" && (
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Audio Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              {/* Volume Control */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Background Volume
                </label>
                <div className="grid grid-cols-5 gap-1">
                  {musicSettings.volume.map((volume) => (
                    <Button
                      key={volume}
                      size="sm"
                      variant="outline"
                      className="text-xs border-gray-300 dark:border-gray-600"
                    >
                      {volume}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Fade In Control */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Fade In Duration
                </label>
                <div className="grid grid-cols-4 gap-1">
                  {musicSettings.fadeIn.map((fadeIn) => (
                    <Button
                      key={fadeIn}
                      size="sm"
                      variant="outline"
                      className="text-xs border-gray-300 dark:border-gray-600"
                    >
                      {fadeIn}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Fade Out Control */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Fade Out Duration
                </label>
                <div className="grid grid-cols-4 gap-1">
                  {musicSettings.fadeOut.map((fadeOut) => (
                    <Button
                      key={fadeOut}
                      size="sm"
                      variant="outline"
                      className="text-xs border-gray-300 dark:border-gray-600"
                    >
                      {fadeOut}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Audio Balance */}
            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Audio Balance</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Voice Volume</span>
                  <span className="font-medium text-gray-900 dark:text-white">100%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Background Music</span>
                  <span className="font-medium text-gray-900 dark:text-white">25%</span>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Voice will be the primary audio, with background music supporting the content
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Selected Music Summary */}
      {config.music.id && (
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Audio Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {config.music.id === "none" ? (
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-center">
                    <span className="text-4xl">🔇</span>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mt-2">
                      Voice-Only Narration
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Your video will feature clean voice narration without background music
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>Selected Music:</strong> {config.music.name} ({config.music.genre})
                    <div className="mt-2 text-xs opacity-75">
                      This background music will be mixed with your voice narration to create the perfect audio experience
                    </div>
                  </div>
                </div>
              )}
              
              <div className="flex items-center gap-4">
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => alert("🎵 Combined audio preview (voice + music) would play here")}
                >
                  ▶️ Preview Final Audio
                </Button>
                
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Hear how your voice and background music will sound together
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}