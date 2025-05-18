import { useEffect, useState } from "react";
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
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6 md:max-w-4xl mx-auto items-center">
      <div className="relative w-full md:flex-grow">
        <Input
          type="text"
          placeholder="Search by room number or status..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="pr-10 w-full focus:outline-none focus:ring-0 focus:shadow-none"
          name="searchText"
        />
        <Search
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />
      </div>

      <Tabs
        value={filterStatus}
        onValueChange={setFilterStatus}
        className="w-full md:w-auto mb-5 md:mb-0 bg-transparent"
      >
        <TabsList className="w-full flex flex-wrap sm:flex-nowrap  gap-2 justify-center  p-1 rounded-lg">
          {["All", "Ready", "Occupied", "Needs Cleaning"].map((status) => (
            <TabsTrigger
              key={status}
              value={status}
              className="w-full cursor-pointer sm:w-auto flex-1 min-w-[120px] px-4 py-2  dark:bg-gray-800  text-center rounded-md transition 
          duration-300 
          ease-in-out 
          data-[state=active]:bg-[#19a1e9] 
          data-[state=active]:text-white
          focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {status}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
