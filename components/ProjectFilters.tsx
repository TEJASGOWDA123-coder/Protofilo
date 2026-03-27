"use client";

import { useState, useMemo } from "react";
import { Search, Filter, SortAsc, Code2, Database, Globe } from "lucide-react";

interface ProjectFiltersProps {
  projects: any[];
  onFilteredProjects: (projects: any[]) => void;
}

export default function ProjectFilters({ projects, onFilteredProjects }: ProjectFiltersProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTech, setSelectedTech] = useState("");
  const [sortBy, setSortBy] = useState("name");

  // Extract unique technologies from all projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach(project => {
      project.stack?.forEach((tech: string) => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, [projects]);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = projects.filter(project => {
      const matchesSearch = !searchTerm || 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.stack?.some((tech: string) => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesTech = !selectedTech || 
        project.stack?.includes(selectedTech);
      
      return matchesSearch && matchesTech;
    });

    // Sort projects
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.title.localeCompare(b.title);
        case "date":
          return new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime();
        case "tech":
          return (a.stack?.length || 0) - (b.stack?.length || 0);
        default:
          return 0;
      }
    });
  }, [projects, searchTerm, selectedTech, sortBy]);

  useMemo(() => {
    onFilteredProjects(filteredProjects);
  }, [filteredProjects, onFilteredProjects]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 mb-8">
      <div className="grid gap-6 md:grid-cols-3">
        {/* Search */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
            <Search className="h-4 w-4" />
            Search Projects
          </label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name, tech, or description..."
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          />
        </div>

        {/* Technology Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter by Tech
          </label>
          <select
            value={selectedTech}
            onChange={(e) => setSelectedTech(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          >
            <option value="">All Technologies</option>
            {allTechnologies.map(tech => (
              <option key={tech} value={tech}>{tech}</option>
            ))}
          </select>
        </div>

        {/* Sort Options */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
            <SortAsc className="h-4 w-4" />
            Sort By
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          >
            <option value="name">Name (A-Z)</option>
            <option value="date">Date (Newest)</option>
            <option value="tech">Technology Count</option>
          </select>
        </div>
      </div>

      {/* Active Filters Display */}
      {(searchTerm || selectedTech) && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-2">
            {searchTerm && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                <Search className="h-3 w-3" />
                "{searchTerm}"
                <button
                  onClick={() => setSearchTerm("")}
                  className="ml-1 hover:text-blue-900 dark:hover:text-blue-100"
                >
                  ×
                </button>
              </span>
            )}
            {selectedTech && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                <Code2 className="h-3 w-3" />
                {selectedTech}
                <button
                  onClick={() => setSelectedTech("")}
                  className="ml-1 hover:text-purple-900 dark:hover:text-purple-100"
                >
                  ×
                </button>
              </span>
            )}
          </div>
        </div>
      )}

      {/* Results Count */}
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredProjects.length}</span> of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">{projects.length}</span> projects
        </p>
      </div>
    </div>
  );
}
