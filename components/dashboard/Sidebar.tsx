import Link from "next/link";
import { Home, FolderOpen, Zap, BarChart3, Mail, User } from "lucide-react";

const menuItems = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/dashboard/projects", label: "Projects", icon: FolderOpen },
  { href: "/dashboard/skills", label: "Skills", icon: Zap },
  { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/dashboard/contact", label: "Contact", icon: Mail },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col">
      <div className="p-6 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center">
            <User className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Tejas Gowda</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Developer</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
