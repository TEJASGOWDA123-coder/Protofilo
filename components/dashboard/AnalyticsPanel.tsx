import { TrendingUp } from "lucide-react";

const data = [
  { month: "Jan", projects: 2 },
  { month: "Feb", projects: 3 },
  { month: "Mar", projects: 4 },
  { month: "Apr", projects: 3 },
  { month: "May", projects: 5 },
  { month: "Jun", projects: 4 },
];

const maxProjects = Math.max(...data.map(d => d.projects));

export default function AnalyticsPanel() {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      <h2 className="text-lg font-semibold text-gray-100 mb-4 flex items-center gap-2">
        <TrendingUp className="h-5 w-5 text-indigo-400" />
        Analytics
      </h2>
      <div className="space-y-4">
        <div className="flex items-end justify-between h-32 gap-2">
          {data.map((item) => (
            <div key={item.month} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full flex flex-col justify-end h-24">
                <div
                  className="w-full bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t transition-all duration-500 hover:from-indigo-400 hover:to-indigo-300"
                  style={{ height: `${(item.projects / maxProjects) * 100}%` }}
                />
              </div>
              <span className="text-xs text-gray-500">{item.month}</span>
            </div>
          ))}
        </div>
        <div className="pt-2 border-t border-gray-800">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-400">Total Projects</span>
            <span className="text-sm font-semibold text-gray-100">
              {data.reduce((sum, d) => sum + d.projects, 0)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
