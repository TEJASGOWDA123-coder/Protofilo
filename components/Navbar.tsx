import { ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#home"
          className="flex items-center gap-2 text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">TG</span>
          </div>
          Tejas Gowda
        </a>
        
        <nav className="hidden items-center gap-8 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-600 dark:text-gray-400 transition-all hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105"
            >
              {l.label}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
          >
            View Projects
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </header>
  );
}
