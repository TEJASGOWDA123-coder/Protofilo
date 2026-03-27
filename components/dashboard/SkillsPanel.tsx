import { Zap } from "lucide-react";

const skills = [
  { name: "Java", level: 90 },
  { name: "JavaScript", level: 80 },
  { name: "Machine Learning", level: 75 },
  { name: "MySQL", level: 85 },
];

export default function SkillsPanel() {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      <h2 className="text-lg font-semibold text-gray-100 mb-4 flex items-center gap-2">
        <Zap className="h-5 w-5 text-indigo-400" />
        Skills
      </h2>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-300">
                {skill.name}
              </span>
              <span className="text-xs text-gray-500">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-indigo-500 to-indigo-400 h-2 rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
