import Card from "./Card";
import Header from "./Header";
import RoomNumber from "./RoomNumber";
import StatusBadge from "./StatusBadge";
import PatientDetails from "./PatientDetails";
import Name from "./Name";
import Detail from "./Detail";

type Room = {
  roomNumber: string;
  status: "Ready" | "Occupied" | "Needs Cleaning";
  patient: string;
  mrn: string;
  admittedDate: string;
  los: string;
};

export default function RoomCard({
  roomNumber,
  status,
  patient,
  mrn,
  admittedDate,
  los,
}: Room) {
  const statusColorMap = {
    Ready: "green",
    Occupied: "red",
    "Needs Cleaning": "yellow",
  } as const;

  return (
    <Card>
      <Header>
        <RoomNumber>{roomNumber}</RoomNumber>
        <StatusBadge color={statusColorMap[status]}>{status}</StatusBadge>
      </Header>
      <PatientDetails>
        <Name>{patient}</Name>
        <Detail label="MRN" value={mrn} />
        <Detail label="Admitted" value={admittedDate} />
        <Detail label="LOS" value={los} />
      </PatientDetails>
    </Card>
  );
}
