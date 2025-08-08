import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Welcome</h1>
      <p className="text-gray-700">This is a minimal Next.js base project.</p>
      <div className="space-x-4">
        <Link href="/users" className="text-blue-600 hover:underline">
          Users Table
        </Link>
        <Link href="/users/new" className="text-blue-600 hover:underline">
          New User Form
        </Link>
      </div>
    </main>
  );
}
