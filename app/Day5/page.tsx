import CDayTitle from '@/Components/CDayTitle';
import CProblemSolver from '@/Components/CProblemSolver'
import CodeSnipet from '@/Components/CodeSnipet'
import { SOLUTION_DAY5_PART1 } from '@/Solutions/Day5Part1';
import { SOLUTION_DAY5_PART2 } from '@/Solutions/Day5Part2';
import Link from 'next/link'

const DAY = 4;

export default function Day4Page() {
  return (
    <main className="px-2 lg:px-8">
        <CodeSnipet title='Day 1 Part 1 TypeScript solution' code={
`seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4`
} />


      {/* Header */}
      <CDayTitle day={DAY} title='Scratchcards' />

      {/* Part 1 */}
      <article className='[&>*]:py-3' >
        {/*Problem statement */}

        {/* Solution */}
        <CProblemSolver day={5} part={1} />
        {/* <CodeSnipet title='Day 1 Part 1 TypeScript solution' code={SOLUTION_DAY5_PART1} /> */}
      </article>

      {/* Part 2 */}
      <h1 className='pt-8 aoc-height text-xl pb-8' >--- Part Two ---</h1>

      <article className='[&>*]:py-3 pb-10' >
        
        {/* Solution */}
        <CProblemSolver day={5} part={2} />
        {/* <CodeSnipet title='Day 1 Part 2 TypeScript solution' code={SOLUTION_DAY5_PART2} /> */}
      </article>

    </main>
  )
}
