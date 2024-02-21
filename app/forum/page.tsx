'use client';

// pages/home/index.tsx
import React from 'react';
import FeaturedPosts from '@/components/post/FeaturedPosts';
import IndexBar from '@/components/navbar/IndexBar';

const HomePage: React.FC = () => {
  const sort_by = 'last', tid = '';
  
  return (
    <>
      <IndexBar tid={tid as string} />
      <div className='h-screen'>
        <FeaturedPosts />
      </div>
    </>
  );
};

export default HomePage;



