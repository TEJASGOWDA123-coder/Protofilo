"use client";

import { useState, useEffect, useRef } from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";

interface TimelineItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type: "work" | "education";
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-timeline-id");
            if (id) {
              setVisibleItems((prev) => new Set(prev).add(id));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-timeline-id]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 md:left-1/2"></div>
      
      <div className="space-y-12">
        {items.map((item, index) => (
          <div
            key={item.id}
            data-timeline-id={item.id}
            className={`relative flex items-center md:grid md:grid-cols-2 md:gap-12 ${
              index % 2 === 0 ? "md:text-right" : "md:text-left"
            } ${visibleItems.has(item.id) ? "animate-fade-in" : "opacity-0"}`}
            style={{ animationDelay: visibleItems.has(item.id) ? `${index * 200}ms` : "0ms" }}
          >
            {/* Timeline dot */}
            <div className="absolute left-8 w-6 h-6 bg-white dark:bg-gray-900 border-4 border-blue-500 rounded-full md:left-1/2 md:-translate-x-1/2 z-10 hover:scale-125 transition-transform cursor-pointer"
                 onClick={() => setActiveItem(activeItem === item.id ? null : item.id)}>
              <div className="absolute inset-1 bg-blue-500 rounded-full animate-pulse"></div>
            </div>

            {/* Content */}
            <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? "md:col-start-2" : "md:col-start-1"}`}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all hover:scale-[1.02]">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        <span>{item.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full">
                    <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Expandable description */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  activeItem === item.id ? "max-h-96" : "max-h-0"
                }`}>
                  <div className="pt-4 space-y-2">
                    {item.description.map((desc, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mt-2 flex-shrink-0"></div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expand button */}
                {item.description.length > 0 && (
                  <button
                    onClick={() => setActiveItem(activeItem === item.id ? null : item.id)}
                    className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    {activeItem === item.id ? "Show less" : "Show more"}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
