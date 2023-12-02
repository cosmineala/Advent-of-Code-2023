import CodeSnipet from '@/Components/CodeSnipet'
import Day1Part1, { SOLUTION_DAY1_PART1 } from '@/Components/Day1/Day1Part1'
import Day1Part2, { SOLUTION_DAY1_PART2 } from '@/Components/Day1/Day1Part2'
import TextDay1 from '@/problemText/TextDay1'
import Image from 'next/image'
import Link from 'next/link'

const DAY = 1;

export default function Day1Page() {
  return (
    <main className="px-2 lg:px-8">

      {/* Header */}
      <div className='flex flex-col lg:flex-row items-center lg:gap-6 py-3'>
        <h1 className='aoc-height text-xl' >--- Day {DAY}: Trebuchet?! ---</h1>
        <h2> <Link href="https://adventofcode.com/2023/day/1" target="_blank" className='text-primary hover:text-primaryHover'>View Day {DAY} on Advent of code</Link></h2>
      </div>

      {/* Part 1 */}
      <article className='[&>*]:py-3' >
        {/*Problem statement */}
        <p>Something is wrong with global snow production, and you've been selected to take a look. The Elves have even given you a map; on it, they've used stars to mark the top fifty locations that are likely to be having problems.</p>
        <p>You've been doing this long enough to know that to restore snow operations, you need to check all fifty stars by December 25th.</p>
        <p>Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!</p>
        <p>You try to ask why they can't just use a weather machine ("not powerful enough") and where they're even sending you ("the sky") and why your map looks mostly blank ("you sure ask a lot of questions") and hang on did you just say the sky ("of course, where do you think snow comes from") when you realize that the Elves are already loading you into a trebuchet ("please hold still, we need to strap you in").</p>
        <p>As they're making the final adjustments, they discover that their calibration document (your puzzle input) has been amended by a very young Elf who was apparently just excited to show off her art skills. Consequently, the Elves are having trouble reading the values on the document.</p>
        <p>The newly-improved calibration document consists of lines of text; each line originally contained a specific calibration value that the Elves now need to recover. On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.</p>
        <p>For example:</p>
        <pre className='border border-gray-600 w-fit p-1 ' >
          <code>{`1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet`}</code>
        </pre>
        <p>In this example, the calibration values of these four lines are 12, 38, 15, and 77. Adding these together produces 142.</p>
        <p>Consider your entire calibration document. What is the sum of all of the calibration values?</p>

        {/* Solution */}
        <Day1Part1 />
        <p className='py-4 ' >TypeScript solution: </p>
        <CodeSnipet code={SOLUTION_DAY1_PART1} />
      </article>

      {/* Part 2 */}
      <h1 className='pt-8 aoc-height text-xl pb-8' >--- Part Two ---</h1>

      <article className='[&>*]:py-3 pb-10' >
        {/*Problem statement */}
        <p>Your calculation isn't quite right. It looks like some of the digits are actually spelled out with letters: one, two, three, four, five, six, seven, eight, and nine also count as valid "digits".</p>
        <p>Equipped with this new information, you now need to find the real first and last digit on each line. For example:</p>
        <pre className='border border-gray-600 w-fit p-1 ' >
          <code>{`two1nine\neightwothree\nabcone2threexyz\nxtwone3four\n4nineeightseven2\nzoneight234\n7pqrstsixteen`}</code>
        </pre>
        <p className='pt-3'>In this example, the calibration values are 29, 83, 13, 24, 42, 14, and 76. Adding these together produces 281.</p>
        <p>What is the sum of all of the calibration values?</p>

        {/* Solution */}
        <Day1Part2 />
        <p className='py-4' >TypeScript solution: </p>
        <CodeSnipet code={SOLUTION_DAY1_PART2} />
      </article>

    </main>
  )
}
