type Props = { color: "green" | "red" | "yellow"; children: React.ReactNode };

const colors = {
  green: "bg-[#4CAF50]",
  red: "bg-[#F44336]",
  yellow: "bg-[#FFC107]",
};

export default function StatusBadge({ color, children }: Props) {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full font-semibold text-sm text-white ${colors[color]}`}
    >
      {children}
    </span>
  );
}
