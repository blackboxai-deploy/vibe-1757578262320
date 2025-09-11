"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ChannelSettings() {
  const [settings, setSettings] = useState({
    autoUpload: true,
    defaultPrivacy: "public",
    autoNotify: true,
    thumbnailGeneration: true,
    defaultTags: "AI,YouTube,Content,Automation",
    uploadSchedule: "immediate"
  });

  const updateSetting = (key: string, value: string | boolean) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-white">Channel Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Auto Upload Settings */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white">Upload Automation</h3>
          
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-900 dark:text-white">Auto-upload generated videos</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Automatically upload videos after generation</div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => updateSetting('autoUpload', !settings.autoUpload)}
              className={`${
                settings.autoUpload 
                  ? 'bg-green-50 border-green-200 text-green-700 dark:bg-green-900/20 dark:border-green-600 dark:text-green-400'
                  : 'border-gray-300 dark:border-gray-600'
              }`}
            >
              {settings.autoUpload ? 'ON' : 'OFF'}
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-900 dark:text-white">Auto-generate thumbnails</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Create AI-powered thumbnails automatically</div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => updateSetting('thumbnailGeneration', !settings.thumbnailGeneration)}
              className={`${
                settings.thumbnailGeneration 
                  ? 'bg-green-50 border-green-200 text-green-700 dark:bg-green-900/20 dark:border-green-600 dark:text-green-400'
                  : 'border-gray-300 dark:border-gray-600'
              }`}
            >
              {settings.thumbnailGeneration ? 'ON' : 'OFF'}
            </Button>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white">Default Privacy</h3>
          <div className="grid grid-cols-3 gap-2">
            {['public', 'unlisted', 'private'].map((privacy) => (
              <Button
                key={privacy}
                variant="outline"
                size="sm"
                onClick={() => updateSetting('defaultPrivacy', privacy)}
                className={`capitalize ${
                  settings.defaultPrivacy === privacy
                    ? 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900/20 dark:border-blue-600 dark:text-blue-400'
                    : 'border-gray-300 dark:border-gray-600'
                }`}
              >
                {privacy}
              </Button>
            ))}
          </div>
        </div>

        {/* Default Tags */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white">Default Tags</h3>
          <input
            type="text"
            value={settings.defaultTags}
            onChange={(e) => updateSetting('defaultTags', e.target.value)}
            placeholder="Comma-separated tags..."
            className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <div className="text-xs text-gray-600 dark:text-gray-400">
            These tags will be added to all uploaded videos
          </div>
        </div>

        {/* Upload Schedule */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white">Upload Schedule</h3>
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: 'immediate', label: 'Immediate' },
              { id: 'scheduled', label: 'Scheduled' }
            ].map((option) => (
              <Button
                key={option.id}
                variant="outline"
                size="sm"
                onClick={() => updateSetting('uploadSchedule', option.id)}
                className={`${
                  settings.uploadSchedule === option.id
                    ? 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900/20 dark:border-blue-600 dark:text-blue-400'
                    : 'border-gray-300 dark:border-gray-600'
                }`}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <Button 
            onClick={() => alert('Settings saved successfully!')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            💾 Save Settings
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}