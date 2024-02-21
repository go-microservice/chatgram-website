import Header from '@/components/layout/Header'
import { Side } from '@/components/side/Side'

export default function ForumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      
      <main className="container mx-auto px-0 pt-14 xl:px-40 2xl:px-56">
        <div className='flex shrink grow flex-row md:border-none'>
          <div className='relative w-0 shrink grow lg:w-9/12 lg:grow-0'>
            {children}
          </div>
          <div className='relative hidden w-3/12 shrink-0 md:block md:grow-0'>
            <Side index={true} />
          </div>
        </div>
      </main>
    </section>
  )
}