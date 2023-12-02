"use client";
import React from "react";
import { downloadAndParseDayInput } from "../../Util/Parsers";

interface IProps { };

const Day1Part1: React.FC<IProps> = () => {

    const [res1, set1Res] = React.useState<string>("");

    return (
        <div className="flex gap-4" >
            <button
                className="text-xl text-primary hover:text-primaryHover"
                onClick={async () => {
                    const res = await solve_Day1Part1();
                    set1Res(res);
                }}
            >
                [Solve 1.1]
            </button>
            <div className="text-xl text-yellow-600" >
                {res1}
            </div>
        </div>
    );
};

export default Day1Part1;


async function solve_Day1Part1(): Promise<string> {
    // download input
    const input = await downloadAndParseDayInput(1);
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
`async function solve_Day1Part1(): Promise<string> {
    // download input
    const input = await downloadAndParseDayInput(1);
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