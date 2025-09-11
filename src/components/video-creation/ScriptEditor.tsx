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

interface ScriptEditorProps {
  config: VideoConfig;
  updateConfig: (updates: Partial<VideoConfig>) => void;
}

export function ScriptEditor({ config, updateConfig }: ScriptEditorProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [systemPrompt, setSystemPrompt] = useState(
    "You are an expert YouTube script writer. Create engaging, informative scripts that hook viewers from the start, provide valuable content, and encourage engagement. Include natural transitions, compelling hooks, and clear calls-to-action."
  );

  const generateScript = async () => {
    if (!config.topic || !config.niche) {
      alert("Please select a niche and enter a topic first.");
      return;
    }

    setIsGenerating(true);
    try {
      const response = await fetch("/api/generate-script", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          niche: config.niche,
          topic: config.topic,
          systemPrompt: systemPrompt,
        }),
      });

      const data = await response.json();
      if (data.script) {
        updateConfig({ script: data.script });
      } else {
        throw new Error(data.error || "Failed to generate script");
      }
    } catch (error) {
      console.error("Error generating script:", error);
      alert("Failed to generate script. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const estimatedDuration = Math.ceil(config.script.length / 150); // ~150 words per minute

  return (
    <div className="space-y-6">
      {/* System Prompt Configuration */}
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">AI System Prompt</CardTitle>
        </CardHeader>
        <CardContent>
          <textarea
            value={systemPrompt}
            onChange={(e) => setSystemPrompt(e.target.value)}
            placeholder="Customize how the AI should write your script..."
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
        </CardContent>
      </Card>

      {/* Script Generation */}
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-gray-900 dark:text-white">
            Video Script
            <Button
              onClick={generateScript}
              disabled={isGenerating || !config.topic}
              className="bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50"
            >
              {isGenerating ? "🤖 Generating..." : "🤖 Generate Script"}
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Topic Info */}
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Niche:</strong> {config.niche || "Not selected"} | 
                <strong> Topic:</strong> {config.topic || "Not specified"}
              </p>
            </div>

            {/* Script Editor */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Script Content
                </label>
                {config.script && (
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    ~{estimatedDuration} min duration | {config.script.length} characters
                  </div>
                )}
              </div>
              <textarea
                value={config.script}
                onChange={(e) => updateConfig({ script: e.target.value })}
                placeholder="Your generated script will appear here, or you can write your own..."
                rows={15}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 font-mono text-sm"
              />
            </div>

            {/* Script Tools */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  if (config.script) {
                    const wordCount = config.script.split(/\s+/).length;
                    alert(`Word count: ${wordCount} words\\nEstimated reading time: ${Math.ceil(wordCount / 150)} minutes`);
                  }
                }}
                className="border-gray-300 dark:border-gray-600"
              >
                📊 Analytics
              </Button>
              <Button
                variant="outline"
                onClick={() => updateConfig({ script: "" })}
                className="border-gray-300 dark:border-gray-600"
              >
                🗑️ Clear
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  navigator.clipboard.writeText(config.script);
                  alert("Script copied to clipboard!");
                }}
                disabled={!config.script}
                className="border-gray-300 dark:border-gray-600"
              >
                📋 Copy
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Script Preview */}
      {config.script && (
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Script Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <div className="prose dark:prose-invert max-w-none">
                <div className="whitespace-pre-wrap text-sm text-gray-800 dark:text-gray-200">
                  {config.script.substring(0, 500)}
                  {config.script.length > 500 && "..."}
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Script Stats:</strong>
                <div className="grid grid-cols-3 gap-4 mt-2">
                  <div>
                    <div className="font-medium">{config.script.split(/\s+/).length}</div>
                    <div className="text-xs opacity-75">Words</div>
                  </div>
                  <div>
                    <div className="font-medium">{config.script.length}</div>
                    <div className="text-xs opacity-75">Characters</div>
                  </div>
                  <div>
                    <div className="font-medium">~{estimatedDuration} min</div>
                    <div className="text-xs opacity-75">Duration</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}