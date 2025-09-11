"use client";

import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 flex items-center justify-between">
      {/* Search and Breadcrumbs */}
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <span>🏠</span>
          <span>/</span>
          <span>Dashboard</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        {/* Notifications */}
        <Button variant="ghost" className="relative p-2">
          <span className="text-lg">🔔</span>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white">3</span>
          </div>
        </Button>

        {/* Settings */}
        <Button variant="ghost" className="p-2">
          <span className="text-lg">⚙️</span>
        </Button>

        {/* Profile */}
        <Button variant="ghost" className="flex items-center gap-2 px-3">
          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm">U</span>
          </div>
          <span className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-300">
            User
          </span>
        </Button>
      </div>
    </header>
  );
}