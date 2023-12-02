import Day1 from '@/Components/Day1'
import TextDay1 from '@/problemText/TextDay1'
import Image from 'next/image'
import Link from 'next/link'

export default function Day1Page() {
  return (
    <main className="pl-6">
      <div className='p-8' >
        <h1 className='aoc-height text-x' >* Day 1</h1>
        <h2> <Link href="https://adventofcode.com/2023/day/1" target="_blank" className='pl-2 text-primary hover:text-primaryHover'>View on Advent of code</Link></h2>
      </div>
      <div>

        {/* <TextDay1/> */}
        <Day1 />
      </div>
    </main>

  )
}
