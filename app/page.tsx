import Image from "next/image";
import TablePage from "./table";


export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
    <div className="p-8 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold text-gray-800">Welcome to My Page</h1>
      <p className="mt-2 text-gray-600">This is a simple Next.js page using TypeScript.</p>
    </div>
    <TablePage />
  </main>
  );
}
