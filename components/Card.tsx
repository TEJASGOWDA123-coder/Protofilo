import { ReactNode } from "react";

export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-gray-200/50 bg-white/80 backdrop-blur-sm p-6 shadow-lg dark:border-gray-700/50 dark:bg-gray-800/80 ${className}`}
    >
      {children}
    </div>
  );
}
