"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="fixed bottom-5 right-5  z-50 animate-fade-in-up">
            <Button
              onClick={scrollToTop}
              size="icon"
              className="rounded-full bg-[#19a1e9] dark:bg-gray-900 text-white hover:bg-[#19a0e9b5] shadow-lg transition-all duration-500 cursor-pointer hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </TooltipTrigger>
        <TooltipContent side="top" className="text-xs">
          Back to top
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
