"use client";

import { CreationWizard } from "@/components/video-creation/CreationWizard";

export default function CreateVideoPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Create New Video</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Use AI to generate professional videos for your YouTube channel
        </p>
      </div>
      
      <CreationWizard />
    </div>
  );
}