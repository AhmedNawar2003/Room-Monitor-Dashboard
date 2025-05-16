type Props = { label: string; value: string };

export default function Detail({ label, value }: Props) {
  return (
    <div className="flex justify-between text-sm text-gray-600 dark:text-white my-0.5">
      <span className="font-semibold">{label}:</span>
      <span>{value}</span>
    </div>
  );
}
