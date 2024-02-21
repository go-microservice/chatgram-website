// src/app/page.tsx
import { signIn } from '@/services/auth';
import { Button } from '@/components/ui/button';

export default function Home({
  searchParams,
}: {
  searchParams: {
    error?: string;
  }
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex justify-center'>
        {searchParams.error && (
          <p className='text-red-500'>{searchParams.error}</p>
        )}
      </div>
      <form
        action={async () => {
          'use server';
          // 登录完成后，重定向到user页面
          await signIn('github', { redirectTo: '/user' });
        }}
      >
        <Button>Github 登录</Button>
      </form>
      <form
        action={async () => {
          'use server';
          // 登录完成后，重定向到user页面
          await signIn('google', { redirectTo: '/user' });
        }}
      >
        <Button>Google 登录</Button>
      </form>
    </main>
  );
}
