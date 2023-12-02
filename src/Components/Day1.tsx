"use client";
import React from "react";
import { downloadAndParseDayInput } from "../Util/Parsers";

interface IProps { };

const Day1: React.FC<IProps> = () => {

    const [res1, set1Res] = React.useState<string>("");
    const [res2, set2Res] = React.useState<string>("");

    return (
        <div>
            {/* 1.1 */}
            <div className="flex gap-4" >
                <button
                    className="text-primary hover:text-primaryHover"
                    onClick={async () => {
                        const res = await solve1();
                        set1Res(res);
                    }}
                >
                    [Solve 1.1]
                </button>
                <div className="text-yellow-600" >
                    {res1}
                </div>
            </div>

            {/* 1.2 */}
            <div className="flex gap-4" >
                <button
                    className="text-primary hover:text-primaryHover"
                    onClick={async () => {
                        const res = await solve2();
                        set2Res(res);
                    }}
                >
                    [Solve 1.2]
                </button>
                <div className="text-yellow-600" >
                    {res2}
                </div>
            </div>
        </div>
    );
};

export default Day1;


async function solve1(): Promise<string> {
    const input = await downloadAndParseDayInput(1);

    let res = input.split("\n").reduce((acc, curr) => {
        return acc + addFirstANdLastNumberFromString(curr);
    }, 0);

    return res.toString();
}

function addFirstANdLastNumberFromString(input: string): number {
    // number regex
    const regex = /(\d)/g;
    const digits = input.match(regex);
    if (digits === null || digits.length < 1) {
        throw new Error("Not enough numbers in input in \n" + input + "\n" + digits + "\n");
        // return 0;
    }
    const firstDigit = parseInt(digits[0]);
    const lastDigit = parseInt(digits[digits.length - 1]);
    return (10 * firstDigit) + lastDigit;
}


async function solve2(): Promise<string> { // not 56322 //
    const input = await downloadAndParseDayInput(1);
    // const input = `two1nine
    // eightwothree
    // abcone2threexyz
    // xtwone3four
    // 4nineeightseven2
    // zoneight234
    // 7pqrstsixteen`;

    let res = input.split("\n").reduce((acc, curr) => {
        return acc + addFirstANdLastNumberFromString2(curr);
    }, 0);

    return res.toString();
}

function addFirstANdLastNumberFromString2(input: string): number {
    // number regex
    let haseOne = false;
    const regexfirst = /\d|one|two|three|four|five|six|seven|eight|nine/g;
    const regexLast = /\d|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin/g;
    const digits1 = input.match(regexfirst);
    if (digits1 === null || digits1.length < 1) {
        throw new Error("Not enough numbers in input in \n" + input + "\n" + digits1 + "\n");
        // return 0;
    } else {
        haseOne = true;
    }
    const firstDigit = digits1[0].length === 1 ? parseInt(digits1[0]) : numMaps.get(digits1[0]);

    const digits2 = input.split("").reverse().join("").match(regexLast);
    if ((digits2 === null || digits2.length < 1) || !haseOne) {
        throw new Error("Not enough numbers in input in \n" + input + "\n" + digits1 + "\n");
        // return 0;
    }
    const lastDigit = digits2[0].length === 1 ? parseInt(digits2[0]) : numMaps.get(digits2[0]);


    console.log(input, firstDigit, lastDigit);

    if (firstDigit === undefined || lastDigit === undefined) {
        throw new Error("Not enough numbers in input in \n" + input + "\n" + digits1 + "\n");
    }
    // console.log(input, (10 * firstDigit) + lastDigit);
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