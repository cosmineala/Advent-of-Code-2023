import CDayTitle from '@/Components/CDayTitle';
import CProblemSolver from '@/Components/CProblemSolver'
import CodeSnipet from '@/Components/CodeSnipet'
import { SOLUTION_DAY6_PART1 } from '@/Solutions/Day6Part1';
import { SOLUTION_DAY6_PART2 } from '@/Solutions/Day6Part2';
import Link from 'next/link'

const DAY = 4;

export default function Day4Page() {
  return (
    <main className="px-2 lg:px-8">
      <CodeSnipet title='Exaple input' code={
        `Time:      7  15   30
Distance:  9  40  200`}
      />


      {/* Header */}
      <CDayTitle day={DAY} title='Scratchcards' />

      {/* Part 1 */}
      <article className='[&>*]:py-3' >
        {/*Problem statement */}

        {/* Solution */}
        <CProblemSolver day={6} part={1} />
        <CodeSnipet title='Day 6 Part 1 TypeScript solution' code={SOLUTION_DAY6_PART1} />
      </article>

      {/* Part 2 */}
      <h1 className='pt-8 aoc-height text-xl pb-8' >--- Part Two ---</h1>

      <article className='[&>*]:py-3 pb-10' >

        {/* Solution */}
        <CProblemSolver day={6} part={2} />
        <CodeSnipet title='Day 6 Part 2 TypeScript solution' code={SOLUTION_DAY6_PART2} />
      </article>

    </main>
  )
}
