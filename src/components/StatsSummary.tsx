import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  stats: {
    available: number;
    occupied: number;
    cleaning: number;
  };
};

export default function StatsSummary({ stats }: Props) {
  return (
    <div className="max-w-6xl mx-auto mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card className="text-center shadow-md border-[#4CAF50]">
          <CardHeader>
            <CardTitle className="text-[#4CAF50]">Ready</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="md:text-2xl font-bold text-white bg-[#4CAF50] w-12 h-12 rounded-full flex items-center justify-center mx-auto">
              {stats.available}
            </span>
          </CardContent>
        </Card>
        <Card className="text-center shadow-md border-[#F44336]">
          <CardHeader>
            <CardTitle className="text-[#F44336]">Occupied</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="md:text-2xl font-bold text-white bg-[#F44336] w-12 h-12 rounded-full flex items-center justify-center mx-auto">
              {stats.occupied}
            </span>
          </CardContent>
        </Card>
        <Card className="text-center shadow-md border-[#FFC107]">
          <CardHeader>
            <CardTitle className="text-[#FFC107]">Needs Cleaning</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="md:text-2xl font-bold text-white bg-[#FFC107] w-12 h-12 rounded-full flex items-center justify-center mx-auto">
              {stats.cleaning}
            </span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
