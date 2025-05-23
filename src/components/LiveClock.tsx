"use client";
import { useEffect, useState } from "react";

export default function LiveClock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    const now = new Date();
    setTime(now);
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return (
    <div className="fixed right-20 md:right-20 bottom-1 md:bottom-3 text-center mt-6 bg-[#19a1e9] dark:bg-gray-900 rounded-2xl w-fit p-3 text-white">
      🕒 {time.toLocaleTimeString([], { hour12: false })}
    </div>
  );
}
