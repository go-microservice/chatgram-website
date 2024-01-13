'use client';

// pages/home/index.tsx
import React from 'react';
import Navbar from '@/components/Navbar';
import CategoryList from '@/components/CategoryList';
import FeaturedPosts from '@/components/post/FeaturedPosts';
import ArticleList from '@/components/ArticleList';
import CheckIn from '@/components/CheckIn';

const HomePage: React.FC = () => {
  return (
    <div className='h-screen'>
      <div className='relative my-2 overflow-hidden bg-white dark:bg-gray-800 md:rounded-lg'>
        <div className='flex h-12 shrink grow items-center justify-start space-x-1 py-2 px-4 md:space-x-2'>
          <a className="flex h-8 items-center whitespace-nowrap rounded-lg pl-3 pr-3 text-sm font-bold hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-200" href="/?sort_by=last">最新</a>
        </div>
      </div>
      <FeaturedPosts />
    </div>
  );
};

export default HomePage;



