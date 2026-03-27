import { FolderOpen, Zap, Github, Trophy } from "lucide-react";

const cards = [
  {
    icon: FolderOpen,
    title: "Total Projects",
    value: "12",
    change: "+2 this month",
    trend: "up",
  },
  {
    icon: Zap,
    title: "Skills Count",
    value: "7",
    change: "+1 this month",
    trend: "up",
  },
  {
    icon: Github,
    title: "GitHub Repos",
    value: "28",
    change: "+4 this month",
    trend: "up",
  },
  {
    icon: Trophy,
    title: "Experience Level",
    value: "Mid",
    change: "Growing",
    trend: "neutral",
  },
];

export default function OverviewCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.title}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/10"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 bg-indigo-500/10 rounded-lg flex items-center justify-center">
                <Icon className="h-6 w-6 text-indigo-400" />
              </div>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  card.trend === "up"
                    ? "bg-green-500/10 text-green-400"
                    : "bg-gray-500/10 text-gray-400"
                }`}
              >
                {card.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-100 mb-1">{card.value}</h3>
            <p className="text-sm text-gray-400">{card.title}</p>
          </div>
        );
      })}
    </div>
  );
}
