import { Calendar } from "lucide-react";

const activities = [
  {
    title: "Built Online Voting System",
    description: "Completed secure voting workflow with OTP",
    time: "2 days ago",
    type: "project",
  },
  {
    title: "Completed Spam Classifier",
    description: "ML model with 92% accuracy",
    time: "1 week ago",
    type: "project",
  },
  {
    title: "Started KaarigarVerse",
    description: "New artisan platform concept",
    time: "2 weeks ago",
    type: "milestone",
  },
];

export default function ActivityTimeline() {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      <h2 className="text-lg font-semibold text-gray-100 mb-4 flex items-center gap-2">
        <Calendar className="h-5 w-5 text-indigo-400" />
        Activity
      </h2>
      <div className="space-y-4">
        {activities.map((activity, idx) => (
          <div key={activity.title} className="relative">
            {idx !== activities.length - 1 && (
              <div className="absolute left-4 top-8 h-full w-0.5 bg-gray-700" />
            )}
            <div className="flex gap-3">
              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center z-10 ${
                  activity.type === "project"
                    ? "bg-indigo-500/20 text-indigo-400"
                    : "bg-green-500/20 text-green-400"
                }`}
              >
                <div className="h-2 w-2 rounded-full bg-current" />
              </div>
              <div className="flex-1 pb-4">
                <h3 className="text-sm font-medium text-gray-100">
                  {activity.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  {activity.description}
                </p>
                <p className="text-xs text-gray-500 mt-2">{activity.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
