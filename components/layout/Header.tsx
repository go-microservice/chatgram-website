"use client";

// components/layout/Header.tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, signOut, useSession } from "next-auth/react";
import { auth } from "@/services/auth";

const Header: React.FC = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [curPath, setCurPath] = useState('');

  useEffect(() => {
    setCurPath(router.pathname);
  }, [router.pathname]);

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>
  }

  // if (session && session.user) {
  //   console.log("session.user", session?.user);
  //   return (
  //     <button
  //       onClick={() => signOut()}
  //     >
  //       {session.user.name} Sign Out
  //     </button>
  //   );
  // }

  // return (
  //   <button
  //     onClick={() => signIn()}
  //   >
  //     SignIn
  //   </button>
  // );

  return (
    <div className='hg-header fixed z-10 h-14 w-full bg-white shadow-sm backdrop-blur dark:border dark:border-gray-50/[0.06] dark:bg-transparent'>
      <nav className='mx-auto flex max-w-5xl items-center justify-between px-2 py-2 md:py-0 lg:px-0 xl:max-w-5xl 2xl:max-w-7xl'>
        {/* pc 端显示的 logo */}
        <span className='hidden py-2 md:block'>
          <img
            className='cursor-pointer hover:animate-spin dark:invert'
            src='https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/17d2678259b01bde1db1825a3307e5d2.svg'
            width='28'
            height='28'
            alt='header_logo'
            onClick={() => {
              router.push('/');
            }}
          />
        </span>
        <div className="inline-flex flex-auto items-stretch rounded-md bg-white px-2 dark:bg-transparent md:flex-none">
          <div className="relative w-full max-w-xs 2xl:max-w-sm">

          </div>
        </div>
        <ul className='text-md ml-5 flex items-center space-x-2 font-medium text-gray-500 dark:text-gray-400 md:pt-2'>
          {/* pc 端显示的顶部按钮 */}
          <li className="hidden md:block hover:font-bold hover:text-gray-800 hover:border-blue-500 hover:border-b-2 h-12 text-blue-500">
            <button className='inline-flex items-center rounded px-2 py-2 focus:outline-none focus-visible:ring focus-visible:ring-primary-500 transition-colors duration-75 shadow-none active:bg-primary-100 disabled:bg-primary-100 disabled:cursor-not-allowed font-normal text-current hover:bg-transparent dark:text-gray-400 dark:hover:bg-gray-700'>首页</button>
          </li>
          <li className="hidden md:block hover:font-bold hover:text-gray-800 hover:border-blue-500 hover:border-b-2 h-12 text-blue-500">
          <button className='inline-flex items-center rounded px-2 py-2 focus:outline-none focus-visible:ring focus-visible:ring-primary-500 transition-colors duration-75 shadow-none active:bg-primary-100 disabled:bg-primary-100 disabled:cursor-not-allowed font-normal text-current hover:bg-transparent dark:text-gray-400 dark:hover:bg-gray-700'>榜单</button>
          </li>
          <li className="hidden md:block hover:font-bold hover:text-gray-800 hover:border-blue-500 hover:border-b-2 h-12 text-blue-500">
          <button className='inline-flex items-center rounded px-2 py-2 focus:outline-none focus-visible:ring focus-visible:ring-primary-500 transition-colors duration-75 shadow-none active:bg-primary-100 disabled:bg-primary-100 disabled:cursor-not-allowed font-normal text-current hover:bg-transparent dark:text-gray-400 dark:hover:bg-gray-700'>文章</button>
          </li>
        </ul>
        <div>
          <h1>Welcome, {session?.user.name ?? "guest"}!</h1>
        </div>
        <div className='shrink grow'></div>
      </nav>
    </div>
  );
};

export default Header;