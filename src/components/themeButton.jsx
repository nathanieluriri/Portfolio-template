"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Set mounted to true on client-side only.
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until mounted to avoid showing undefined theme.
  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed z-50 bottom-3 right-10 p-2 rounded border bg-zinc-100 dark:bg-zinc-900 border-gray-300 dark:border-gray-700 "
    >
      {theme === "dark" ? <Sun className="w-5 h-5 " /> : <Moon className="w-5 h-5 " />}
    </button>
  );
}
