import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full sm:w-[400px]">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Selamat Datang di SEE</h1>
        <h2 className="text-lg text-center text-gray-600 mb-4">Masuk untuk melanjutkan</h2>
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      </div>
    </main>
  );
}
