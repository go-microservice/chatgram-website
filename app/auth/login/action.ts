'use server';

import { signIn } from '@/services/auth';
import { loginFormSchemaType } from './page';
import { AuthError } from 'next-auth';

export const loginWithGithub = async () => {
  await signIn('github', {
    redirectTo: '/user',
  });
};

export const loginWithGoogle = async () => {
  await signIn('google', {
    redirectTo: '/user',
  });
};

export const loginWithGitee = async () => {
  await signIn('gitee', {
    redirectTo: '/user',
  });
};

export const loginWithCredentials = async (
  credentials: loginFormSchemaType
): Promise<void | {error?: string}> => {
  try {
    await signIn('credentials', {
      ...credentials,
      redirectTo: '/user',
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          // Invalid credentials
          return {
            error: '用户名或密码错误',
          };
        default:
          return {
            error: 'Something went wrong.',
          };
      }
    }

    // 这里一定要抛出异常，不然成功登录后不会重定向
    throw error;
  }
};
