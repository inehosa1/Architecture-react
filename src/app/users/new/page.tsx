import UserForm from '@/features/users/components/user-form';

export default function NewUserPage() {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">New User</h1>
      <UserForm />
    </main>
  );
}
