type Props = { color: "green" | "red" | "yellow"; children: React.ReactNode };

const colors = {
  green: "bg-green-100 text-green-700",
  red: "bg-red-100 text-red-700",
  yellow: "bg-yellow-100 text-yellow-700",
};

export default function StatusBadge({ color, children }: Props) {
  return (
    <span className={`inline-block px-3 py-1 rounded-full font-semibold text-sm ${colors[color]}`}>
      {children}
    </span>
  );
}
