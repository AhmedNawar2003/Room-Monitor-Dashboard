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
        <Card className="text-center shadow-md border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-500">Available</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="md:text-2xl font-bold text-white bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
              {stats.available}
            </span>
          </CardContent>
        </Card>
        <Card className="text-center shadow-md border-red-200">
          <CardHeader>
            <CardTitle className="text-red-500">Occupied</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="md:text-2xl font-bold text-white bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
              {stats.occupied}
            </span>
          </CardContent>
        </Card>
        <Card className="text-center shadow-md border-yellow-200">
          <CardHeader>
            <CardTitle className="text-yellow-500">Cleaning</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="md:text-2xl font-bold text-white bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
              {stats.cleaning}
            </span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
