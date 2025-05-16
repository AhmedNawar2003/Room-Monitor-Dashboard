export default function Card({ children }: { children: React.ReactNode }) {
    return (
       <div className="bg-white text-black dark:bg-gray-900 dark:text-white shadow-md rounded-lg p-6 cursor-pointer hover:shadow-lg transition">
        {children}
    </div>
    );
  }
  