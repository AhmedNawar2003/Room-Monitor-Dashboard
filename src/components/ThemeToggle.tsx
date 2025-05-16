"use client";

import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false); 

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const preferred = saved || "light";
    setTheme(preferred);
    document.documentElement.classList.toggle("dark", preferred === "dark"); 
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  if (!mounted) return null; 

  return (
    <button
      onClick={toggleTheme}
      className="fixed cursor-pointer top-4 right-4 p-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full shadow hover:scale-110 transition"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? <FiMoon size={22} /> : <FiSun size={22} />}
    </button>
  );
}
