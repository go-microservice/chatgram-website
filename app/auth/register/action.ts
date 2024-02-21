'use server';

import bcrypt from 'bcrypt';
import { register as regUser, getUserByEmail } from '@/services/user';
import { RegisterFormSchemaType } from './page';

export const register = async (data: RegisterFormSchemaType) => {
  const existUser = await getUserByEmail(data.email);

  if (existUser) {
    return {
      error: '当前邮箱已存在！',
    };
  }

  // 给密码加盐，密码明文存数据库不安全
  const hashedPassword = await bcrypt.hash(data.password, 10);

  await regUser({
      password: hashedPassword,
      email: data.email,
  });

};
