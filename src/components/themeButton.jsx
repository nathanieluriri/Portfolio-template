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

  // Declare currentTheme outside the if-else block to ensure it has the correct scope
  let currentTheme;

  // Check if theme is "system" or undefined, and default accordingly
  if (theme === "dark" || theme === "light") {
    currentTheme = theme;  // Use the actual theme if it's valid
  } else if (theme === "system") {
    // If the theme is 'system', default to the system preference (light or dark)
    currentTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  } else {
    // If no theme is set, default to 'dark'
    currentTheme = "dark";
  }

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  console.log(currentTheme);  // Log the current theme (will not be 'undefined')

  return (
    <button
      onClick={toggleTheme}
      className="fixed z-50 bottom-3 right-10 p-2 rounded border bg-zinc-100 dark:bg-zinc-900 border-gray-300 dark:border-gray-700 "
    >
      {currentTheme === "dark" ? <Sun className="w-5 h-5 " /> : <Moon className="w-5 h-5 " />}
    </button>
  );
}
