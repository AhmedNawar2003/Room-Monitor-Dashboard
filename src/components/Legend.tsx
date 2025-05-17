"use client";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

export default function Legend() {
  return (
    <TooltipProvider>
      <div className="flex justify-center my-4 flex-wrap gap-6 text-sm font-medium">
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center gap-2 cursor-help">
              <span className="w-3 h-3 bg-[#4CAF50] rounded-full"></span>
              Ready
            </div>
          </TooltipTrigger>
          <TooltipContent>
            Rooms currently empty and ready to use
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center gap-2 cursor-help">
              <span className="w-3 h-3 bg-[#F44336] rounded-full"></span>
              Occupied
            </div>
          </TooltipTrigger>
          <TooltipContent>
            Rooms currently occupied by a patient
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center gap-2 cursor-help">
              <span className="w-3 h-3 bg-[#FFC107] rounded-full"></span>
             Needs Cleaning
            </div>
          </TooltipTrigger>
          <TooltipContent>
            Rooms that need cleaning before being used
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
