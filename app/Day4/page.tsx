import CProblemSolver from '@/Components/CProblemSolver'
import CodeSnipet from '@/Components/CodeSnipet'
import { SOLUTION_DAY4_PART1 } from '@/Solutions/Day4Part1';
import { SOLUTION_DAY4_PART2 } from '@/Solutions/Day4Part2';
import Link from 'next/link'

const DAY = 4;

export default function Day4Page() {
  return (
    <main className="px-2 lg:px-8">

      {/* Header */}
      <div className='flex flex-col lg:flex-row items-center lg:gap-6 py-3'>
        <h1 className='aoc-height text-xl' >--- Day {DAY}: TODO name?! ---</h1>
        <h2> <Link href="https://adventofcode.com/2023/day/1" target="_blank" className='text-primary hover:text-primaryHover'>View Day {DAY} on Advent of code</Link></h2>
      </div>

      {/* Part 1 */}
      <article className='[&>*]:py-3' >
        {/*Problem statement */}

        {/* Solution */}
        <CProblemSolver day={4} part={1} />
        <CodeSnipet title='Day 1 Part 1 TypeScript solution' code={SOLUTION_DAY4_PART1} />
      </article>

      {/* Part 2 */}
      <h1 className='pt-8 aoc-height text-xl pb-8' >--- Part Two ---</h1>

      <article className='[&>*]:py-3 pb-10' >
        {/*Problem statement */}


        {/* Solution */}
        <CProblemSolver day={4} part={2} />
        <CodeSnipet title='Day 1 Part 2 TypeScript solution' code={SOLUTION_DAY4_PART2} />
      </article>

    </main>
  )
}
