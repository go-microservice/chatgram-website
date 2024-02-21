import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials";
import { z } from 'zod';
import { User } from '@/types/user';
// import { addUser, getUser } from "@/lib/redis";

// 如果是服务端组件, 通过对 auth()返回的 session 进行判断, 根据 session.user 是否存在来区分登录和未登录状态
// 如果是在客户端组件，可以通过 useSession() 返回的 status 来判断

const MINUTE = 60;
const HOUR = 60 * MINUTE;

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/",
  },
  providers:[
    Credentials({
      // 显示按钮文案 (e.g. "Sign in with...")
      name: "密码登录",
      // `credentials` 用于渲染登录页面表单
      credentials: {
        username: { label: "邮箱", type: "text", placeholder: "输入您的邮箱" },
        password: { label: "密码", type: "password", placeholder: "输入您的密码" }
      },
      // 处理从用户收到的认证信息
      async authorize(credentials, req) {
        console.log(credentials, req);
        // https://nextjs.org/learn/dashboard-app/adding-authentication
        // 默认情况下不对用户输入进行验证，确保使用 Zod 这样的库进行验证
        
        // 登陆信息验证
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
 
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) { 
            return null;
          }

          // 密码错误
          if (user.password !== credentials.password) return null;

          return user;
        }

        console.log('Invalid credentials');
        return null;
      }
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET
    })
  ],
  // jwt: {
  //   secret: process.env.NEXTAUTH_SECRET,
  // },
  session: {
    strategy: 'jwt',
    maxAge: 8 * HOUR, // 8 hours
  },
  callbacks: {
    // authorized({ request, auth }) {
    //   const { pathname } = request.nextUrl
    //   if (pathname.startsWith("/note/edit")) 
    //     return !!auth
    //   return true
    // },
    jwt: async ({ token, user }) => {
      // if (user) {
      //   token.id = +user.id;
      //   token.jwt = user.jwt;
      //   token.name = user.name;
      //   token.email = user.email;
      // }
      return token;
    },
    // session: async ({ session, user }) => {
    //   if (session.user) {
    //     session.user.id = user.id;
    //   }
    //   return session;
    // },
  },
  // Enable debug messages in the console if you are having problems
  debug: process.env.NODE_ENV === 'development'
})


async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = { id: "1", name: "J Smith", email: "jsmith@example.com", password: "" };
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
// https://dev.to/josemukorivo/unlock-next-level-authentication-in-nextjs-with-next-auth-and-typescript-module-augmentation-1689
// https://blog.stackademic.com/next-js-13-authentication-with-nextauth-js-app-router-typescript-641058805bc3
