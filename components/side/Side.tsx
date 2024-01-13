import Footer from '../layout/Footer';

interface Props {
  index: boolean;
}

export const Side = ({ index }: Props) => {
  return (
    <>
      <div className='relative mt-2 ml-3 max-w-[244px]'>
        <div className='space-y-2'>
          <div className='rounded-lg bg-white pl-3 pr-3 pt-3 pb-2.5 dark:bg-gray-800'>
            马上登录
          </div>
        </div>
        {index ? <Footer /> : <></>}
      </div>
    </>
  )
};