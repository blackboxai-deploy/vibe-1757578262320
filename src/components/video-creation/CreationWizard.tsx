"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScriptEditor } from "./ScriptEditor";
import { VoiceSelector } from "./VoiceSelector";
import { MusicSelector } from "./MusicSelector";
import { VideoPreview } from "./VideoPreview";

type Step = "niche" | "script" | "voice" | "music" | "preview" | "publish";

const steps = [
  { id: "niche", title: "Choose Niche", icon: "🎯" },
  { id: "script", title: "Generate Script", icon: "📝" },
  { id: "voice", title: "Select Voice", icon: "🎤" },
  { id: "music", title: "Add Music", icon: "🎵" },
  { id: "preview", title: "Preview", icon: "👁️" },
  { id: "publish", title: "Publish", icon: "🚀" },
];

interface VideoConfig {
  niche: string;
  topic: string;
  script: string;
  voice: {
    id: string;
    name: string;
    accent: string;
  };
  music: {
    id: string;
    name: string;
    genre: string;
  };
  title: string;
  description: string;
  tags: string[];
}

export function CreationWizard() {
  const [currentStep, setCurrentStep] = useState<Step>("niche");
  const [config, setConfig] = useState<VideoConfig>({
    niche: "",
    topic: "",
    script: "",
    voice: { id: "", name: "", accent: "" },
    music: { id: "", name: "", genre: "" },
    title: "",
    description: "",
    tags: [],
  });

  const currentStepIndex = steps.findIndex(step => step.id === currentStep);

  const goToNext = () => {
    const nextIndex = currentStepIndex + 1;
    if (nextIndex < steps.length) {
      setCurrentStep(steps[nextIndex].id as Step);
    }
  };

  const goToPrevious = () => {
    const prevIndex = currentStepIndex - 1;
    if (prevIndex >= 0) {
      setCurrentStep(steps[prevIndex].id as Step);
    }
  };

  const updateConfig = (updates: Partial<VideoConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="space-y-6">
      {/* Progress Steps */}
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium ${
                    index <= currentStepIndex
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                  }`}
                >
                  <span>{step.icon}</span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 w-16 mx-2 ${
                      index < currentStepIndex
                        ? "bg-blue-600"
                        : "bg-gray-200 dark:bg-gray-700"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            {steps.map((step) => (
              <div key={step.id} className="text-center">
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Step Content */}
      <div className="min-h-[500px]">
        {currentStep === "niche" && (
          <NicheSelection config={config} updateConfig={updateConfig} />
        )}
        {currentStep === "script" && (
          <ScriptEditor config={config} updateConfig={updateConfig} />
        )}
        {currentStep === "voice" && (
          <VoiceSelector config={config} updateConfig={updateConfig} />
        )}
        {currentStep === "music" && (
          <MusicSelector config={config} updateConfig={updateConfig} />
        )}
        {currentStep === "preview" && (
          <VideoPreview config={config} updateConfig={updateConfig} />
        )}
        {currentStep === "publish" && (
          <PublishSettings config={config} updateConfig={updateConfig} />
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={goToPrevious}
          disabled={currentStepIndex === 0}
          className="border-gray-300 dark:border-gray-600"
        >
          ← Previous
        </Button>
        <Button
          onClick={goToNext}
          disabled={currentStepIndex === steps.length - 1}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          {currentStepIndex === steps.length - 1 ? "Publish Video" : "Next →"}
        </Button>
      </div>
    </div>
  );
}

// Niche Selection Component
function NicheSelection({ config, updateConfig }: { config: VideoConfig; updateConfig: (updates: Partial<VideoConfig>) => void }) {
  const niches = [
    { id: "tech", name: "Technology", icon: "💻", description: "AI, Software, Gadgets" },
    { id: "business", name: "Business", icon: "💼", description: "Entrepreneurship, Finance" },
    { id: "lifestyle", name: "Lifestyle", icon: "✨", description: "Health, Wellness, Travel" },
    { id: "education", name: "Education", icon: "📚", description: "Tutorials, Learning" },
    { id: "entertainment", name: "Entertainment", icon: "🎬", description: "Movies, Gaming, Fun" },
    { id: "food", name: "Food", icon: "🍳", description: "Cooking, Recipes, Reviews" },
  ];

  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-white">Choose Your Niche</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {niches.map((niche) => (
            <div
              key={niche.id}
              onClick={() => updateConfig({ niche: niche.id })}
              className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                config.niche === niche.id
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                  : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
            >
              <div className="text-center">
                <div className="text-3xl mb-2">{niche.icon}</div>
                <h3 className="font-medium text-gray-900 dark:text-white">{niche.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{niche.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Video Topic
            </label>
            <input
              type="text"
              value={config.topic}
              onChange={(e) => updateConfig({ topic: e.target.value })}
              placeholder="Enter a specific topic for your video..."
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Publish Settings Component
function PublishSettings({ config, updateConfig }: { config: VideoConfig; updateConfig: (updates: Partial<VideoConfig>) => void }) {
  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-white">Publish Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Video Title
          </label>
          <input
            type="text"
            value={config.title}
            onChange={(e) => updateConfig({ title: e.target.value })}
            placeholder="Enter video title..."
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Description
          </label>
          <textarea
            value={config.description}
            onChange={(e) => updateConfig({ description: e.target.value })}
            placeholder="Enter video description..."
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Tags
          </label>
          <input
            type="text"
            value={config.tags.join(", ")}
            onChange={(e) => updateConfig({ tags: e.target.value.split(",").map(tag => tag.trim()) })}
            placeholder="Enter tags separated by commas..."
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
      </CardContent>
    </Card>
  );
}