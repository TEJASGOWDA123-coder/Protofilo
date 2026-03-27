import Sidebar from "@/components/dashboard/Sidebar";
import TopNav from "@/components/dashboard/TopNav";
import OverviewCards from "@/components/dashboard/OverviewCards";
import ProjectsPanel from "@/components/dashboard/ProjectsPanel";
import SkillsPanel from "@/components/dashboard/SkillsPanel";
import ActivityTimeline from "@/components/dashboard/ActivityTimeline";
import AnalyticsPanel from "@/components/dashboard/AnalyticsPanel";

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <OverviewCards />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <ProjectsPanel />
                <SkillsPanel />
              </div>
              <div className="space-y-6">
                <ActivityTimeline />
                <AnalyticsPanel />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
