import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Online Voting System",
    description: "Secure voting workflow with email OTP verification",
    tech: ["Java", "MySQL", "Email OTP"],
    status: "Completed",
    github: "#",
    demo: "#",
  },
  {
    title: "Spam Email Classifier",
    description: "ML model to classify emails as spam or not spam",
    tech: ["Python", "ML", "NLP"],
    status: "Completed",
    github: "#",
    demo: "#",
  },
  {
    title: "Online Bookstore",
    description: "Full-stack bookstore with cart and order flows",
    tech: ["Java", "MySQL"],
    status: "Ongoing",
    github: "#",
    demo: "#",
  },
  {
    title: "KaarigarVerse",
    description: "Artisan-focused platform to showcase work",
    tech: ["Web", "Product"],
    status: "Ongoing",
    github: "#",
    demo: "#",
  },
];

export default function ProjectsPanel() {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      <h2 className="text-lg font-semibold text-gray-100 mb-4">Projects</h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-indigo-500/50 transition-all"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-base font-medium text-gray-100">
                {project.title}
              </h3>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  project.status === "Completed"
                    ? "bg-green-500/10 text-green-400"
                    : "bg-yellow-500/10 text-yellow-400"
                }`}
              >
                {project.status}
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <a
                href={project.github}
                className="inline-flex items-center gap-1 text-xs px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded transition-colors"
              >
                <Github className="h-3 w-3" />
                GitHub
              </a>
              <a
                href={project.demo}
                className="inline-flex items-center gap-1 text-xs px-3 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded transition-colors"
              >
                <ExternalLink className="h-3 w-3" />
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
