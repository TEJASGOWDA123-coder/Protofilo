import { Search, Bell, User } from "lucide-react";
import ThemeToggle from "../ThemeToggle";

export default function TopNav() {
  return (
    <header className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Dashboard</h1>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-64 pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500"
          />
        </div>
        <ThemeToggle />
        <button className="relative p-2 text-gray-400 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-indigo-500 rounded-full" />
        </button>
        <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center">
          <User className="h-4 w-4 text-white" />
        </div>
      </div>
    </header>
  );
}
