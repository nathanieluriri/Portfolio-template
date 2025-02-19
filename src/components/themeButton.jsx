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
      className="p-2 rounded border border-gray-300 dark:border-gray-700 transition-all duration-75"
    >
      {theme === "dark" ? <Sun className="w-5 h-5 transition-all duration-75" /> : <Moon className="w-5 h-5 transition-all duration-75" />}
    </button>
  );
}
