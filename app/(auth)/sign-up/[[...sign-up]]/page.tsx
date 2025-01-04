import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-gradient-to-r from-green-500 to-teal-600">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full sm:w-[400px]">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Bergabung dengan SEE</h1>
        <h2 className="text-lg text-center text-gray-600 mb-4">Daftar untuk memulai pertemuan online</h2>
        <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
      </div>
    </main>
  );
}
