"use client";

import { useState, useEffect, useRef } from "react";

interface AnimatedProgressProps {
  value: number;
  max?: number;
  label: string;
  color?: string;
  height?: number;
  showPercentage?: boolean;
  animated?: boolean;
}

export default function AnimatedProgress({ 
  value, 
  max = 100, 
  label, 
  color = "from-blue-500 to-purple-600", 
  height = 8,
  showPercentage = true,
  animated = true 
}: AnimatedProgressProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && animated) {
      const duration = 2000;
      const increment = value / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setProgress(value);
          clearInterval(timer);
        } else {
          setProgress(current);
        }
      }, 16);

      return () => clearInterval(timer);
    } else if (!animated) {
      setProgress(value);
    }
  }, [isVisible, value, animated]);

  const percentage = Math.round((progress / max) * 100);

  return (
    <div ref={ref} className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </span>
        {showPercentage && (
          <span className="text-sm font-bold text-gray-900 dark:text-white">
            {percentage}%
          </span>
        )}
      </div>
      <div className="relative">
        <div 
          className="w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
          style={{ height: `${height}px` }}
        >
          <div
            className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
            style={{ width: `${percentage}%` }}
          >
            <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-2 w-2 bg-white rounded-full shadow-lg opacity-0 animate-fade-in" 
               style={{ animationDelay: '1s', animationFillMode: 'forwards' }}></div>
        </div>
      </div>
    </div>
  );
}
