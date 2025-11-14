import LoginForm from '@/app/ui/login-form';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </main>
  );
}
