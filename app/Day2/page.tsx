import Day1 from '@/Components/Day1'
import Day2 from '@/Components/Day2'
import TextDay1 from '@/problemText/TextDay1'
import Image from 'next/image'
import Link from 'next/link'

export default function Day1Page() {
  return (
    <main className="pl-6">
      <div className='p-8' >
        <h1 className='aoc-height text-x' >* Day 2</h1>
        <h2> <Link href="https://adventofcode.com/2023/day/2" target="_blank" className='pl-2 text-primary hover:text-primaryHover'>View on Advent of code</Link></h2>
      </div>
      <div>

        {/* <TextDay1/> */}
        <Day2 />
      </div>
    </main>

  )
}
