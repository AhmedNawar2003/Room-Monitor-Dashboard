"use client";

import { useEffect } from "react";

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

type Props = {
  isOpen: boolean;
  onClose: () => void;
  room: Room | null;
};

export default function RoomModal({ isOpen, onClose, room }: Props) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen || !room) return null;

  return (
    <div className="fixed inset-0 bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 dark:text-white   text-black rounded-lg p-6 w-full max-w-md shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-2 right-2 text-gray-500 dark:text-white hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4">Room {room.roomNumber} Details</h2>
        <p className="mb-2"><strong>Type:</strong> {room.type}</p>
        <p className="mb-2"><strong>Status:</strong> {room.status}</p>
        <p className="mb-2"><strong>Patient:</strong> {room.patient}</p>
        <p className="mb-2"><strong>MRN:</strong> {room.mrn}</p>
        <p className="mb-2"><strong>Admitted:</strong> {room.admittedDate}</p>
        <p><strong>LOS:</strong> {room.los}</p>
      </div>
    </div>
  );
}
