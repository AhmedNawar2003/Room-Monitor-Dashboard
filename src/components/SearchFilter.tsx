"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {
  searchText: string;
  setSearchText: (value: string) => void;
  filterType: string;
  setFilterType: (value: string) => void;
  filterStatus: string;
  setFilterStatus: (value: string) => void;
};

export default function SearchFilter({
  searchText,
  setSearchText,
  filterStatus,
  setFilterStatus,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6 md:max-w-4xl mx-auto items-center">
      <div className="relative w-full md:flex-grow">
        <Input
          type="text"
          placeholder="Search by patient or type..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="pr-10 w-full"
        />
        <Search
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />
      </div>

      <Tabs
        value={filterStatus}
        onValueChange={setFilterStatus}
        className="w-full md:w-auto"
      >
        <TabsList className="w-full flex">
          <TabsTrigger
            value="All"
            className="flex-1 text-center cursor-pointer"
          >
            All Statuses
          </TabsTrigger>
          <TabsTrigger
            value="Ready"
            className="flex-1 text-center cursor-pointer"
          >
            Ready
          </TabsTrigger>
          <TabsTrigger
            value="Occupied"
            className="flex-1 text-center cursor-pointer"
          >
            Occupied
          </TabsTrigger>
          <TabsTrigger
            value="Needs Cleaning"
            className="flex-1 text-center cursor-pointer whitespace-nowrap"
          >
            Needs Cleaning
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
