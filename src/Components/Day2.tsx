"use client";
import React from "react";
import { downloadAndParseDayInput } from "../Util/Parsers";

interface IProps { };

const Day2: React.FC<IProps> = () => {

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

export default Day2;


async function solve1(): Promise<string> {
    const input = await downloadAndParseDayInput(2);

    let res = input.split("\n").reduce((acc, curr) => {
        let res = verifyQtyPerColour(curr);
        console.log(res);
        return acc + res;
    }, 0);

    return res.toString();
}

function verifyQtyPerColour(input: string): number {
    const gameNoRegex = /Game (\d+): /g;

    const no = [...input.matchAll(gameNoRegex)][0][1];

    let inputCubesText = input.replace(gameNoRegex, "");
    let toReturn = 0;

    inputCubesText.split("; ").forEach((cubeSet) => {
        let set = cubeSet.split(", ");
        set.forEach((cube) => {

            let count = parseInt( cube.match(/\d+/g)[0] );
            let color = cube.match(/red|green|blue/g)[0];
            
            if( count > cubeCounts[color]  ) {
                
                console.log(no,count, color, cubeCounts[color]);
                toReturn = -1;
                return;
            }
        });
    });

    if (toReturn === -1) {
        return 0;
    }

    return parseInt(no);
}
async function solve2(): Promise<string> {
    const input = await downloadAndParseDayInput(2);

    let res = input.split("\n").reduce((acc, curr) => {
        let res = verifyQtyPerColou2(curr);
        console.log(res);
        return acc + res;
    }, 0);

    return res.toString();
}

function verifyQtyPerColou2(input: string): number {
    const gameNoRegex = /Game (\d+): /g;

    const no = [...input.matchAll(gameNoRegex)][0][1];

    let inputCubesText = input.replace(gameNoRegex, "");
    let toReturn = 0;

    let max = {
        red: 0,
        green: 0,
        blue: 0,
    }

    inputCubesText.split("; ").forEach((cubeSet) => {
        let set = cubeSet.split(", ");
        set.forEach((cube) => {

            let count = parseInt( cube.match(/\d+/g)[0] );
            let color = cube.match(/red|green|blue/g)[0];

            if (count > max[color]) {
                max[color] = parseInt(count);
            }
            
            // if( count > cubeCounts[color]  ) {
                
            //     console.log(no,count, color, cubeCounts[color]);
            //     toReturn = -1;
            //     return;
            // }
        });
    });

    let res = max.red * max.green * max.blue;
    console.log(no, res);

    return res;
}

const cubeCounts = {
    red: 12,
    green: 13,
    blue: 14,
}

