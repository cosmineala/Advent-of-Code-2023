import { solve_Day1Part1 } from '@/Solutions/Day1Part1'
import { solve_Day1Part2 } from '@/Solutions/Day1Part2'
import { solve_Day4Part1 } from '@/Solutions/Day4Part1'
import { solve_Day4Part2 } from '@/Solutions/Day4Part2'
import { solve_Day5Part1 } from '@/Solutions/Day5Part1'
import { solve_Day5Part2 } from '@/Solutions/Day5Part2'




const solutionMap: { [key: number]: { [key: number]: (input: string) => string } } = {
    1: {
        1: solve_Day1Part1,
        2: solve_Day1Part2,
    },
    //
    4: {
        1: solve_Day4Part1,
        2: solve_Day4Part2,
    },
    5: {
        1: solve_Day5Part1,
        2: solve_Day5Part2,
    },
}

export default function getSolution( day: number, part: number ) {
    return solutionMap[ day ][ part ]
}