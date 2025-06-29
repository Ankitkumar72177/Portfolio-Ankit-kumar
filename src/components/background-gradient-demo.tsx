"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function BackgroundGradientDemo() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-2">🎨</div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Portfolio Project</p>
          </div>
        </div>
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Modern Portfolio Design
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Experience beautiful animated gradient borders that perfectly complement 
          your portfolio's design system. This enhanced component uses colors that 
          match your blue, purple, and pink theme.
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-gradient-to-r from-blue-600 to-purple-600 mt-4 text-xs font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
          <span>View Project </span>
          <span className="bg-blue-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            →
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}
