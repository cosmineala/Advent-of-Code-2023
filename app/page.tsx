import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex justify-center">



      <div className='p-5 grid grid-cols-3 lg:grid-cols-7 gap-4 text-xl max-w-fit' >

        {/* empty spaces */}
        {Array.from({ length: 25 }, (_, i) => i + 1).map(day =>
          <div className='hidden lg:block' ></div>
        )}

        {Array.from({ length: 25 }, (_, i) => i + 1).map(day =>
          <Link href={`./Day${day}`} className='text-primary hover:text-primaryHover' >[Day {day < 10 && <span>&nbsp;</span>}{day}]</Link>
        )}

      </div>
    </main>

  )
}
