"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import RoomCard from "./RoomCard";
import RoomModal from "./RoomModal";
import SearchFilter from "./SearchFilter";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { FaDoorOpen } from "react-icons/fa";
import StatsSummary from "./StatsSummary";
import Legend from "./Legend";
import LiveClock from "./LiveClock";

type Room = {
  id: number;
  roomNumber: string;
  type: "VIP" | "Standard";
  patient: string;
  status: "Ready" | "Occupied" | "Needs Cleaning";
  mrn: string;
  admittedDate: string;
  los: string;
};

export default function Home() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [searchText, setSearchText] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get("/data/rooms.json");
        setRooms(response.data);
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    };

    fetchRooms();
  }, []);

  const filteredRooms = rooms.filter((room) => {
    const matchesSearch =
      room.roomNumber.toLowerCase().includes(searchText.toLowerCase()) ||
      room.status.toLowerCase().includes(searchText.toLowerCase());

    const matchesType = filterType === "All" || room.type === filterType;
    const matchesStatus =
      filterStatus === "All" || room.status === filterStatus;

    return matchesSearch && matchesType && matchesStatus;
  });

  const handleOpenRoom = (room: Room) => {
    setSelectedRoom(room);
    toast(`Opened Room ${room.roomNumber}`, {
      description: `Patient: ${room.patient}`,
    });
  };
  return (
    <main className="min-h-screen p-6 bg-app text-app">
      <h1 className="bg-[#19a1e9] text-white p-5 rounded-2xl text-xl md:text-3xl font-bold mb-6 text-center flex items-center justify-center gap-3">
        <FaDoorOpen className="text-white" />
        Room Monitor Dashboard
      </h1>
      <StatsSummary
        stats={{
          available: rooms.filter((r) => r.status === "Ready").length,
          occupied: rooms.filter((r) => r.status === "Occupied").length,
          cleaning: rooms.filter((r) => r.status === "Needs Cleaning").length,
        }}
      />
      <Legend />
      <Tabs
        defaultValue="All"
        onValueChange={setFilterType}
        className="mb-6 max-w-3xl mx-auto"
      >
        <TabsList className="w-full flex justify-center gap-4">
          {["All", "VIP", "Standard"].map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="
          cursor-pointer 
          px-4 py-2 
          rounded-md 
          transition 
          duration-300 
          ease-in-out 
          data-[state=active]:bg-blue-700 
          data-[state=active]:text-white
          focus:outline-none focus:ring-2 focus:ring-blue-400
        "
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <SearchFilter
        searchText={searchText}
        setSearchText={setSearchText}
        filterType={filterType}
        setFilterType={setFilterType}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room) => (
            <div key={room.id} onClick={() => handleOpenRoom(room)}>
              <RoomCard {...room} />
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-400">
            No rooms found.
          </p>
        )}
      </div>
      <LiveClock />
      <RoomModal
        isOpen={!!selectedRoom}
        onClose={() => setSelectedRoom(null)}
        room={selectedRoom}
      />
    </main>
  );
}
