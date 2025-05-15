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
  filterType,
  setFilterType,
  filterStatus,
  setFilterStatus,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6 max-w-4xl mx-auto items-center">
      <div className="relative flex-grow">
        <Input
          type="text"
          placeholder="Search by patient or type..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="pr-10"
        />
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
      </div>

      <Tabs
        value={filterStatus}
        onValueChange={setFilterStatus}
        className="w-auto"
      >
        <TabsList>
          <TabsTrigger value="All" className="flex-grow text-center">
            All Statuses
          </TabsTrigger>
          <TabsTrigger value="Ready" className="flex-grow text-center">
            Ready
          </TabsTrigger>
          <TabsTrigger value="Occupied" className="flex-grow text-center">
            Occupied
          </TabsTrigger>
          <TabsTrigger value="Needs Cleaning" className="flex-grow text-center whitespace-nowrap">
            Needs Cleaning
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
