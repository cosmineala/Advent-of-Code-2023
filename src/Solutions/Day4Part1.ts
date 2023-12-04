export function solve_Day4Part1(input: string): string {

    let res = input.split("\n").reduce((acc, curr) => {
        return acc + addFirstANdLastNumberFromString(curr);
    }, 0);

    return res.toString();
}

function addFirstANdLastNumberFromString(input: string): number {
    const regex = /Card\s+\d+:\s(.*)\s+\|\s+(.*)/g;
    const matches = [...input.matchAll(regex)][0]

    let set1 = new Set( matches[1].split(/\s+/g).map(x => parseInt(x)) );
    let set2 = new Set( matches[2].split(/\s+/g).map(x => parseInt(x)) );

    let sum = 0;
    set1.forEach((x) => {
        if (set2.has(x)) {
            if (sum === 0) {
                sum += 1;
            } else {
                sum *= 2;
            }
        }
    });

    return sum;
}

export const SOLUTION_DAY4_PART1 =
`export function solve_Day4Part1(input: string): string {

    let res = input.split("\\n").reduce((acc, curr) => {
        return acc + addFirstANdLastNumberFromString(curr);
    }, 0);

    return res.toString();
}

function addFirstANdLastNumberFromString(input: string): number {
    const regex = /Card\\s+\\d+:\\s(.*)\\s+\\|\\s+(.*)/g;
    const matches = [...input.matchAll(regex)][0]

    let set1 = new Set( matches[1].split(/\\s+/g).map(x => parseInt(x)) );
    let set2 = new Set( matches[2].split(/\\s+/g).map(x => parseInt(x)) );

    let sum = 0;
    set1.forEach((x) => {
        if (set2.has(x)) {
            if (sum === 0) {
                sum += 1;
            } else {
                sum *= 2;
            }
        }
    });

    return sum;
}`;