"use client";
import { useEffect, useState } from "react";

export default function LiveClock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    const now = new Date();
    setTime(now); // Set initial time on mount
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null; // Prevent mismatch by rendering only on client

  return (
    <div className="fixed right-5 bottom-5 text-center mt-6 bg-[#19a1e9] rounded-2xl w-fit p-3 text-white">
      🕒 {time.toLocaleTimeString()}
    </div>
  );
}
