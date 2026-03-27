"use client";

import { useState, useEffect } from "react";
import { BarChart3, TrendingUp, Users, Eye, MousePointer, Download } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

interface AnalyticsData {
  views: number;
  visitors: number;
  projects: number;
  clicks: number;
  downloads: number;
  avgTime: number;
}

export default function AnalyticsPage() {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    views: 1247,
    visitors: 892,
    projects: 12,
    clicks: 342,
    downloads: 156,
    avgTime: 245
  });

  const [timeRange, setTimeRange] = useState("7d");

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setAnalytics(prev => ({
        ...prev,
        views: prev.views + Math.floor(Math.random() * 3),
        visitors: prev.visitors + (Math.random() > 0.7 ? 1 : 0),
        clicks: prev.clicks + Math.floor(Math.random() * 2),
        downloads: prev.downloads + (Math.random() > 0.8 ? 1 : 0)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-slate-900">
      <Navbar />

      <main className="px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Analytics Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400">Track your portfolio performance in real-time</p>
          </div>

          {/* Time Range Selector */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 mb-8">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Time Range</h2>
              <div className="flex gap-2">
                {["24h", "7d", "30d", "90d"].map((range) => (
                  <button
                    key={range}
                    onClick={() => setTimeRange(range)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      timeRange === range
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <Eye className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Total Views</h3>
                </div>
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{analytics.views.toLocaleString()}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">+12% from last {timeRange}</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                    <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Unique Visitors</h3>
                </div>
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{analytics.visitors.toLocaleString()}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">+8% from last {timeRange}</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-green-100 dark:bg-green-900 flex items-center justify-center">
                    <MousePointer className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Total Clicks</h3>
                </div>
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{analytics.clicks.toLocaleString()}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">+15% from last {timeRange}</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
                    <Download className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Downloads</h3>
                </div>
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{analytics.downloads.toLocaleString()}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">+5% from last {timeRange}</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Avg. Session Time</h3>
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{analytics.avgTime}s</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Per visit</p>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Traffic Overview</h2>
            <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-16 w-16 text-blue-600 dark:text-blue-400 mb-4" />
                <p className="text-gray-600 dark:text-gray-400">Interactive chart visualization</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Real-time analytics coming soon</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-base font-semibold text-white shadow-xl transition-all hover:shadow-2xl hover:scale-105"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
