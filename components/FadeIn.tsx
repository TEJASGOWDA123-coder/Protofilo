"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

export default function FadeIn({
  children,
  className = "",
  delayMs = 0,
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`${shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"} ${className} transition-all duration-700 ease-out`}
    >
      {children}
    </div>
  );
}
