"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const voiceLibrary = [
  {
    id: "sarah-professional",
    name: "Sarah",
    accent: "American",
    gender: "Female",
    age: "Adult",
    tone: "Professional, Warm",
    category: "Business",
    description: "Perfect for corporate presentations and professional content",
    sampleText: "Welcome to our comprehensive guide on artificial intelligence and its impact on modern business.",
    popular: true
  },
  {
    id: "james-british",
    name: "James",
    accent: "British",
    gender: "Male", 
    age: "Adult",
    tone: "Authoritative, Clear",
    category: "Educational",
    description: "Ideal for documentaries, tutorials, and educational content",
    sampleText: "In today's lesson, we'll explore the fundamental principles of machine learning and neural networks.",
    popular: true
  },
  {
    id: "maria-energetic",
    name: "Maria",
    accent: "Spanish",
    gender: "Female",
    age: "Young Adult",
    tone: "Energetic, Friendly",
    category: "Lifestyle",
    description: "Great for lifestyle, travel, and entertainment videos",
    sampleText: "Hey everyone! Today I'm excited to share some amazing tips that will completely transform your daily routine.",
    popular: false
  },
  {
    id: "david-casual",
    name: "David",
    accent: "Australian",
    gender: "Male",
    age: "Adult",
    tone: "Casual, Engaging",
    category: "Entertainment",
    description: "Perfect for vlogs, gaming, and casual content",
    sampleText: "G'day mates! Welcome back to another episode where we dive deep into the latest tech trends.",
    popular: false
  }
];

const musicLibrary = [
  {
    id: "corporate-success",
    name: "Corporate Success",
    genre: "Corporate",
    mood: "Upbeat, Motivational",
    duration: "3:45",
    category: "Business",
    description: "Professional background music for business content",
    bpm: 120
  },
  {
    id: "digital-future",
    name: "Digital Future", 
    genre: "Electronic",
    mood: "Modern, Tech",
    duration: "4:20",
    category: "Technology",
    description: "Perfect for tech reviews and AI content",
    bpm: 128
  },
  {
    id: "gentle-acoustic",
    name: "Gentle Thoughts",
    genre: "Acoustic",
    mood: "Warm, Friendly", 
    duration: "3:30",
    category: "Lifestyle",
    description: "Soft background music for personal content",
    bpm: 95
  }
];

export default function LibraryPage() {
  const [activeTab, setActiveTab] = useState<'voices' | 'music'>('voices');
  const [selectedVoice, setSelectedVoice] = useState<string | null>(null);
  const [selectedMusic, setSelectedMusic] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Voice & Music Library
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Browse and manage your collection of AI voices and background music
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('voices')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'voices'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            🎤 Voice Library ({voiceLibrary.length})
          </button>
          <button
            onClick={() => setActiveTab('music')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'music'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            🎵 Music Library ({musicLibrary.length})
          </button>
        </nav>
      </div>

      {/* Voice Library */}
      {activeTab === 'voices' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">AI Voice Collection</h2>
            <Button 
              onClick={() => alert('Voice upload feature would be available in the pro version')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              ➕ Add Custom Voice
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {voiceLibrary.map((voice) => (
              <Card 
                key={voice.id}
                className={`bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 cursor-pointer transition-all hover:shadow-lg ${
                  selectedVoice === voice.id ? 'ring-2 ring-blue-500 border-blue-500' : ''
                }`}
                onClick={() => setSelectedVoice(voice.id)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-gray-900 dark:text-white flex items-center gap-2">
                      <span className="text-2xl">{voice.gender === 'Male' ? '👨' : '👩'}</span>
                      {voice.name}
                      {voice.popular && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400 text-xs rounded-full">
                          ⭐ Popular
                        </span>
                      )}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {voice.accent} • {voice.category}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Gender:</span>
                      <div className="font-medium text-gray-900 dark:text-white">{voice.gender}</div>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Age:</span>
                      <div className="font-medium text-gray-900 dark:text-white">{voice.age}</div>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Tone:</span>
                      <div className="font-medium text-gray-900 dark:text-white">{voice.tone}</div>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Accent:</span>
                      <div className="font-medium text-gray-900 dark:text-white">{voice.accent}</div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {voice.description}
                  </p>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                    <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">Sample Text:</div>
                    <div className="text-sm text-gray-900 dark:text-white italic">
                      "{voice.sampleText}"
                    </div>
                  </div>
                  
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="w-full border-gray-300 dark:border-gray-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      alert(`🎵 Playing preview of ${voice.name}'s voice...`);
                    }}
                  >
                    ▶️ Preview Voice
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Music Library */}
      {activeTab === 'music' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Background Music Collection</h2>
            <Button 
              onClick={() => alert('Music upload feature would be available in the pro version')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              ➕ Upload Music
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {musicLibrary.map((music) => (
              <Card 
                key={music.id}
                className={`bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 cursor-pointer transition-all hover:shadow-lg ${
                  selectedMusic === music.id ? 'ring-2 ring-blue-500 border-blue-500' : ''
                }`}
                onClick={() => setSelectedMusic(music.id)}
              >
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="text-2xl">🎵</span>
                    {music.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {music.genre} • {music.category}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                      <div className="font-medium text-gray-900 dark:text-white">{music.duration}</div>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">BPM:</span>
                      <div className="font-medium text-gray-900 dark:text-white">{music.bpm}</div>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-600 dark:text-gray-400">Mood:</span>
                      <div className="font-medium text-gray-900 dark:text-white">{music.mood}</div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {music.description}
                  </p>
                  
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="flex-1 border-gray-300 dark:border-gray-600"
                      onClick={(e) => {
                        e.stopPropagation();
                        alert(`🎵 Playing preview of ${music.name}...`);
                      }}
                    >
                      ▶️ Preview
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-gray-300 dark:border-gray-600"
                      onClick={(e) => {
                        e.stopPropagation();
                        alert(`📥 Downloading ${music.name}...`);
                      }}
                    >
                      📥
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Selected Items Summary */}
      {(selectedVoice || selectedMusic) && (
        <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-600">
          <CardHeader>
            <CardTitle className="text-blue-900 dark:text-blue-100">Current Selection</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6">
              {selectedVoice && (
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎤</span>
                  <div>
                    <div className="text-sm font-medium text-blue-900 dark:text-blue-100">
                      Voice: {voiceLibrary.find(v => v.id === selectedVoice)?.name}
                    </div>
                    <div className="text-xs text-blue-700 dark:text-blue-300">
                      {voiceLibrary.find(v => v.id === selectedVoice)?.accent} accent
                    </div>
                  </div>
                </div>
              )}
              
              {selectedMusic && (
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎵</span>
                  <div>
                    <div className="text-sm font-medium text-blue-900 dark:text-blue-100">
                      Music: {musicLibrary.find(m => m.id === selectedMusic)?.name}
                    </div>
                    <div className="text-xs text-blue-700 dark:text-blue-300">
                      {musicLibrary.find(m => m.id === selectedMusic)?.genre}
                    </div>
                  </div>
                </div>
              )}
              
              <Button
                size="sm"
                className="ml-auto bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => alert('🎬 These selections will be used in your next video creation!')}
              >
                Use in Video
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}