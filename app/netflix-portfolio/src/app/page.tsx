import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">NETFLIX PORTFOLIO</h1>
        <p className="text-xl mb-8">Welcome to Subrahmanya K P&apos;s Netflix-themed portfolio</p>
        <p className="text-gray-400">
          Click &quot;Continue&quot; to explore my work
        </p>
        <button className="mt-6 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
          Continue
        </button>
      </div>
    </main>
  );
}
