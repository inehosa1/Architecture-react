import UsersTable from '@/features/users/components/users-table';
import Link from 'next/link';

export default function UsersPage() {
  return (
    <main className="p-8 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Users</h1>
        <Link href="/users/new" className="text-blue-600 hover:underline">
          Create User
        </Link>
      </div>
      <UsersTable />
    </main>
  );
}
