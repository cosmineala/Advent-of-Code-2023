export function solve_Day1Part1(input: string): string {
    // for each line, add first and last number
    let res = input.split("\n").reduce((acc, curr) => {
        return acc + addFirstANdLastNumberFromString(curr);
    }, 0);

    return res.toString();
}

function addFirstANdLastNumberFromString(input: string): number {
    const regex = /(\d)/g;
    const digits = input.match(regex);
    if (digits === null || digits.length < 1) {
        throw new Error("Not enough numbers in input in \n" + input + "\n" + digits + "\n");
    }
    const firstDigit = parseInt(digits[0]);
    const lastDigit = parseInt(digits[digits.length - 1]);
    return (10 * firstDigit) + lastDigit;
}

export const SOLUTION_DAY1_PART1 =
`function solve_Day1Part1(input: string): string {
    // for each line, add first and last number
    let res = input.split("\\n").reduce((acc, curr) => {
        return acc + addFirstANdLastNumberFromString(curr);
    }, 0);

    return res.toString();
}

function addFirstANdLastNumberFromString(input: string): number {
    const regex = /(\\d)/g;
    const digits = input.match(regex);
    if (digits === null || digits.length < 1) {
        throw new Error("Not enough numbers in input in \\n" + input + "\\n" + digits + "\\n");
    }
    const firstDigit = parseInt(digits[0]);
    const lastDigit = parseInt(digits[digits.length - 1]);
    return (10 * firstDigit) + lastDigit;
}`;