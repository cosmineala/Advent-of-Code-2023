"use client";
import React from "react";
import { downloadAndParseDayInput } from "@/Util/Parsers";

interface IProps { };

const Day1Part2: React.FC<IProps> = () => {

    const [res2, set2Res] = React.useState<string>("");

    return (
        <div className="flex gap-4" >
            <button
                className="text-xl text-primary hover:text-primaryHover"
                onClick={async () => {
                    const res = await solve_Day1Part2();
                    set2Res(res);
                }}
            >
                [Solve 1.2]
            </button>
            <div className="text-xl text-yellow-600" >
                {res2}
            </div>
        </div>
    );
};

export default Day1Part2;

async function solve_Day1Part2(): Promise<string> {
    const input = await downloadAndParseDayInput(1);

    let res = input.split("\n").reduce((acc, curr) => {
        return acc + addFirstAndLastNumberFromStringIncludingText(curr);
    }, 0);

    return res.toString();
}

function addFirstAndLastNumberFromStringIncludingText(input: string): number {
    let haseOne = false;
    const regexfirst = /\d|one|two|three|four|five|six|seven|eight|nine/g;
    const regexLast = /\d|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin/g;
    const digits1 = input.match(regexfirst);
    if (digits1 === null || digits1.length < 1) {
        throw new Error("Not enough numbers in input in \n" + input + "\n" + digits1 + "\n");
    } else {
        haseOne = true;
    }
    const firstDigit = digits1[0].length === 1 ? parseInt(digits1[0]) : numMaps.get(digits1[0]);

    const digits2 = input.split("").reverse().join("").match(regexLast);
    if ( digits2 === null || !haseOne) {
        throw new Error("Not enough numbers in input in \n" + input + "\n" + digits1 + "\n");
    }
    const lastDigit = digits2[0].length === 1 ? parseInt(digits2[0]) : numMaps.get(digits2[0]);

    if (firstDigit === undefined || lastDigit === undefined) {
        throw new Error("Not enough numbers in input in \n" + input + "\n" + digits1 + "\n");
    }
    return (10 * firstDigit) + lastDigit;
}

const numMaps = new Map([
    ["one", 1],
    ["two", 2],
    ["three", 3],
    ["four", 4],
    ["five", 5],
    ["six", 6],
    ["seven", 7],
    ["eight", 8],
    ["nine", 9],
    ["eno", 1],
    ["owt", 2],
    ["eerht", 3],
    ["ruof", 4],
    ["evif", 5],
    ["xis", 6],
    ["neves", 7],
    ["thgie", 8],
    ["enin", 9],
]);

export const SOLUTION_DAY1_PART2 = 
`async function solve_Day1Part2(): Promise<string> {
    const input = await downloadAndParseDayInput(1);

    let res = input.split("\\n").reduce((acc, curr) => {
        return acc + addFirstAndLastNumberFromStringIncludingText(curr);
    }, 0);

    return res.toString();
}

function addFirstAndLastNumberFromStringIncludingText(input: string): number {
    let haseOne = false;
    const regexfirst = /\\d|one|two|three|four|five|six|seven|eight|nine/g;
    const regexLast = /\\d|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin/g;
    const digits1 = input.match(regexfirst);
    if (digits1 === null || digits1.length < 1) {
        throw new Error("Not enough numbers in input in \\n" + input + "\\n" + digits1 + "\\n");
    } else {
        haseOne = true;
    }
    const firstDigit = digits1[0].length === 1 ? parseInt(digits1[0]) : numMaps.get(digits1[0]);

    const digits2 = input.split("").reverse().join("").match(regexLast);
    if ( digits2 === null || !haseOne) {
        throw new Error("Not enough numbers in input in \\n" + input + "\\n" + digits1 + "\\n");
    }
    const lastDigit = digits2[0].length === 1 ? parseInt(digits2[0]) : numMaps.get(digits2[0]);

    if (firstDigit === undefined || lastDigit === undefined) {
        throw new Error("Not enough numbers in input in \\n" + input + "\\n" + digits1 + "\\n");
    }
    return (10 * firstDigit) + lastDigit;
}

const numMaps = new Map([
    ["one", 1],
    ["two", 2],
    ["three", 3],
    ["four", 4],
    ["five", 5],
    ["six", 6],
    ["seven", 7],
    ["eight", 8],
    ["nine", 9],
    ["eno", 1],
    ["owt", 2],
    ["eerht", 3],
    ["ruof", 4],
    ["evif", 5],
    ["xis", 6],
    ["neves", 7],
    ["thgie", 8],
    ["enin", 9],
]);`;