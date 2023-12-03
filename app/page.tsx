import Link from 'next/link'

export default function Home() {
  return (
    <main className="">

     

      <div className='p-5 flex flex-col gap-2' >
        <Link href={'./Day1'} className='text-primary hover:text-primaryHover' >
          [Day 1]
        </Link>
        <Link href={'./Day2'} className='text-primary hover:text-primaryHover' >
          [Day 2]
        </Link>
        <Link href={'./Day3'} className='text-primary hover:text-primaryHover' >
          [Day 3]
        </Link>
        {/* <Link href={'./Day1'} className='text-primary hover:text-primaryHover' >
          [Day 2]
        </Link>
        <Link href={'./Day1'} className='text-primary hover:text-primaryHover' >
          [Day 3]
        </Link>
        <Link href={'./Day1'} className='text-primary hover:text-primaryHover' >
          [Day 4]
        </Link> */}
      </div>
    </main>

  )
}
