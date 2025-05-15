"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import RoomCard from "./RoomCard";
import RoomModal from "./RoomModal";
import SearchFilter from "./SearchFilter";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { FaDoorOpen } from "react-icons/fa";

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
      room.patient.toLowerCase().includes(searchText.toLowerCase()) ||
      room.type.toLowerCase().includes(searchText.toLowerCase()) ||
      room.roomNumber.toLowerCase().includes(searchText.toLowerCase());

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

      {/* Tabs to Filter Room Type */}
      <Tabs
        defaultValue="All"
        onValueChange={setFilterType}
        className="mb-6 max-w-3xl mx-auto"
      >
        <TabsList className="w-full flex justify-center">
          <TabsTrigger className="cursor-pointer" value="All" >All</TabsTrigger>
          <TabsTrigger className="cursor-pointer" value="VIP">VIP</TabsTrigger>
          <TabsTrigger className="cursor-pointer" value="Standard">Standard</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Filters (Search + Status) */}
      <SearchFilter
        searchText={searchText}
        setSearchText={setSearchText}
        filterType={filterType}
        setFilterType={setFilterType}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />

      {/* Room Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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

      {/* Modal */}
      <RoomModal
        isOpen={!!selectedRoom}
        onClose={() => setSelectedRoom(null)}
        room={selectedRoom}
      />
    </main>
  );
}
