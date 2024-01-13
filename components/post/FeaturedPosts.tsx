// components/FeaturedPosts.tsx
import React from 'react';

const featuredPosts = [
  {
    id: 1,
    title: '如何学习React',
    author: '张三',
    date: '2023-01-05',
    imageUrl: 'https://placekitten.com/800/400', // 替换为实际图片链接
  },
  {
    id: 2,
    title: 'Vue 3 发布了！',
    author: '李四',
    date: '2023-01-03',
    imageUrl: 'https://placekitten.com/800/401', // 替换为实际图片链接
  },
  {
    id: 3,
    title: 'Vue 3 发布了！!',
    author: '李四',
    date: '2023-01-03',
    imageUrl: 'https://placekitten.com/800/401', // 替换为实际图片链接
  },
  {
    id: 4,
    title: 'Vue 3 发布了！!!',
    author: '李四',
    date: '2023-01-03',
    imageUrl: 'https://placekitten.com/800/401', // 替换为实际图片链接
  },
  {
    id: 5,
    title: 'Vue 3 发布了！!!',
    author: '李四5',
    date: '2023-01-03',
    imageUrl: 'https://placekitten.com/800/401', // 替换为实际图片链接
  },
  {
    id: 6,
    title: 'Vue 3 发布了！!!',
    author: '李四6',
    date: '2023-01-03',
    imageUrl: 'https://placekitten.com/800/401', // 替换为实际图片链接
  },
  {
    id: 7,
    title: 'Vue 3 发布了！!!',
    author: '李四7',
    date: '2023-01-03',
    imageUrl: 'https://placekitten.com/800/401', // 替换为实际图片链接
  },
  {
    id: 8,
    title: 'Vue 3 发布了！!!',
    author: '李四8',
    date: '2023-01-03',
    imageUrl: 'https://placekitten.com/800/401', // 替换为实际图片链接
  },
  // 添加更多特色帖子数据
];

const FeaturedPosts: React.FC = () => {
  return (
    <div className="divide-y divide-slate-100 bg-white dark:divide-slate-700 dark:bg-slate-800 md:overflow-y-hidden md:rounded-lg">
    {featuredPosts.map((item) => (
      <div key={item.id} className="relative cursor-pointer bg-white py-3 px-4 hover:bg-gray-50 hover:text-blue-500 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
        <div className='flex w-full flex-row'>
          <div className='mr-2.5 hidden min-w-fit md:block'>
            <img
              width='100'
              height='160'
              src={item.imageUrl}
              className='bg-img block rounded bg-white'
            />
          </div>
          <div className='relative flex w-full flex-col truncate'>
            <div className='flex flex-row pb-0.5'>
              <div className='flex w-full shrink grow flex-row items-center'>
                <div className='w-80 truncate text-base leading-snug md:w-96'>
                  {item.title}
                </div>
                <div className='shrink grow' />
                <div className='justify-end'>
                  {item.id > 0 ? (
                    <div className='h-4 whitespace-nowrap rounded-md bg-blue-400 py-0.5 px-2 text-xs font-semibold leading-none text-white dark:text-gray-100'>
                      {item.id}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
            <div className='mt-0.5 truncate text-sm text-gray-400'>
              {item.title || '-'}
            </div>
            <div className='mt-1 flex items-center'>
              <div className='flex shrink grow items-center overflow-x-hidden text-sm text-gray-400'>
                <img
                  width='20'
                  height='20'
                  src={item.author}
                  className='bg-img mr-1 h-5 w-5 rounded bg-white md:hidden'
                />
                <div className='max-w-[6rem] truncate whitespace-nowrap md:block md:max-w-[10rem]'>
                  {item.author}
                </div>
                <span className='pl-1 pr-1'>·</span>
                <div className='flex flex-row items-center'>
                  <div
                    style={{ backgroundColor: `${item.date}` }}
                    className='relative box-border inline-block h-3 w-3 rounded-full border border-gray-100 align-[-1px] dark:border-gray-500'
                  ></div>
                  <div className='max-w-[5rem] truncate whitespace-nowrap pl-0.5 md:max-w-[10rem]'>
                    {item.date}
                  </div>
                </div>
                <span className='pl-1 pr-1'>·</span>
                <time>{item.date}</time>
              </div>
              <div className='flex flex-row items-center text-sm text-gray-400'>
                <span className='ml-0.5'>
                  {(item.id, 1, 1000)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
    </div>
  );
};

export default FeaturedPosts;
