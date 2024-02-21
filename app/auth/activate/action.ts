// src/app/auth/activate/action.ts
'use server';

import { activateUser as activeUser } from '@/services/user';

export const activateUser = async (email: string, token: string) => {
  const verificationToken = await activeUser({
    email: email,
    token: token
  });

  return {
    error: 'success',
    success: '激活成功',
  };
};
