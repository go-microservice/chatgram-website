import { useRouter } from 'next/navigation';
import IndexBar from '@/components/navbar/IndexBar';
import FeaturedPosts from '@/components/post/FeaturedPosts'
import Image from 'next/image'

export default function Home() {
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
