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

interface VoiceSelectorProps {
  config: VideoConfig;
  updateConfig: (updates: Partial<VideoConfig>) => void;
}

const voiceOptions = [
  {
    id: "sarah",
    name: "Sarah",
    accent: "American",
    gender: "Female",
    age: "Adult",
    tone: "Professional, Warm",
    demo: "👩 Professional female voice, perfect for business and educational content"
  },
  {
    id: "james",
    name: "James",
    accent: "British",
    gender: "Male",
    age: "Adult", 
    tone: "Authoritative, Clear",
    demo: "👨 British male voice, ideal for documentaries and tech content"
  },
  {
    id: "maria",
    name: "Maria",
    accent: "Spanish",
    gender: "Female",
    age: "Young Adult",
    tone: "Energetic, Friendly",
    demo: "👩 Energetic Spanish-accented voice, great for lifestyle content"
  },
  {
    id: "david",
    name: "David",
    accent: "Australian",
    gender: "Male",
    age: "Adult",
    tone: "Casual, Engaging",
    demo: "👨 Australian male voice, perfect for entertainment and vlogs"
  },
  {
    id: "alex",
    name: "Alex",
    accent: "Canadian",
    gender: "Neutral",
    age: "Adult",
    tone: "Neutral, Clear",
    demo: "🎭 Gender-neutral voice, suitable for all content types"
  },
  {
    id: "priya",
    name: "Priya",
    accent: "Indian",
    gender: "Female", 
    age: "Adult",
    tone: "Sophisticated, Articulate",
    demo: "👩 Indian-accented female voice, excellent for educational content"
  }
];

const voiceSettings = {
  speed: ["0.8x", "0.9x", "1.0x", "1.1x", "1.2x"],
  pitch: ["Low", "Normal", "High"],
  emphasis: ["None", "Light", "Strong"]
};

export function VoiceSelector({ config, updateConfig }: VoiceSelectorProps) {
  const selectVoice = (voice: typeof voiceOptions[0]) => {
    updateConfig({
      voice: {
        id: voice.id,
        name: voice.name,
        accent: voice.accent
      }
    });
  };

  return (
    <div className="space-y-6">
      {/* Voice Selection */}
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">Choose Voice</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {voiceOptions.map((voice) => (
              <div
                key={voice.id}
                onClick={() => selectVoice(voice)}
                className={`p-4 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                  config.voice.id === voice.id
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-md"
                    : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {voice.name}
                    </h3>
                    <span className="text-xl">{voice.gender === 'Male' ? '👨' : voice.gender === 'Female' ? '👩' : '🎭'}</span>
                  </div>
                  
                  <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <div><strong>Accent:</strong> {voice.accent}</div>
                    <div><strong>Tone:</strong> {voice.tone}</div>
                  </div>
                  
                  <div className="text-sm text-gray-700 dark:text-gray-300">
                    {voice.demo}
                  </div>
                  
                  <div className="pt-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="w-full border-gray-300 dark:border-gray-600"
                      onClick={(e) => {
                        e.stopPropagation();
                        alert("🎵 Voice preview would play here in a real implementation");
                      }}
                    >
                      🎵 Preview
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Voice Settings */}
      {config.voice.id && (
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Voice Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              {/* Speed Control */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Speaking Speed
                </label>
                <div className="grid grid-cols-5 gap-1">
                  {voiceSettings.speed.map((speed) => (
                    <Button
                      key={speed}
                      size="sm"
                      variant="outline"
                      className="text-xs border-gray-300 dark:border-gray-600"
                    >
                      {speed}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Pitch Control */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Voice Pitch
                </label>
                <div className="grid grid-cols-3 gap-1">
                  {voiceSettings.pitch.map((pitch) => (
                    <Button
                      key={pitch}
                      size="sm"
                      variant="outline"
                      className="text-xs border-gray-300 dark:border-gray-600"
                    >
                      {pitch}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Emphasis Control */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Emphasis
                </label>
                <div className="grid grid-cols-3 gap-1">
                  {voiceSettings.emphasis.map((emphasis) => (
                    <Button
                      key={emphasis}
                      size="sm"
                      variant="outline"
                      className="text-xs border-gray-300 dark:border-gray-600"
                    >
                      {emphasis}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Selected Voice Summary */}
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Selected Voice:</strong> {config.voice.name} ({config.voice.accent})
                <div className="mt-2 text-xs opacity-75">
                  This voice will be used to generate the narration for your video. You can preview the final result in the next step.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Voice Preview */}
      {config.voice.id && config.script && (
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Voice Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="text-sm text-gray-800 dark:text-gray-200 font-mono">
                  "{config.script.substring(0, 200)}..."
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => alert("🎵 Voice preview with your script would play here")}
                >
                  ▶️ Preview with Script
                </Button>
                
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  This is how your script will sound with the selected voice
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}