import Day3Part1 from '@/Components/Day3/Day3Part1'
import Day3Part2 from '@/Components/Day3/Day3Part2'
import Link from 'next/link'

export default function Day3Page() {
  return (
    <main className="pl-6">
      <div className='p-8' >
        <h1 className='aoc-height text-x' >* Day 3</h1>
        <h2> <Link href="https://adventofcode.com/2023/day/3" target="_blank" className='pl-2 text-primary hover:text-primaryHover'>View on Advent of code</Link></h2>
      </div>
      <div>

        {/* <TextDay1/> */}
        <p>Time: P1 + P2 03:20:00</p>
        <Day3Part1 />
        <Day3Part2 />
      </div>
    </main>

  )
}
