"use client";
import React from "react";
import { downloadAndParseDayInput } from "@/Util/Parsers";
import { channel } from "diagnostics_channel";
import { off } from "process";

interface IProps { };

const Day3Part2: React.FC<IProps> = () => {

    const [res2, set2Res] = React.useState<string>("");

    return (
        <div className="flex gap-4" >
            <button
                className="text-xl text-primary hover:text-primaryHover"
                onClick={async () => {
                    const input = await downloadAndParseDayInput(3);
                    const res = solve_Day1Part2(input);
                    set2Res(res);
                }}
            >
                [Solve 3.2]
            </button>
            <div className="text-xl text-yellow-600" >
                {res2}
            </div>
        </div>
    );
};

export default Day3Part2;

function solve_Day1Part2(input: string): string {
    input = input.replaceAll("\r", "");
    // alert(input);
    let matrix = new ClassEngineMatrix(input);

    let toSumUp = [];

    // let line = "";
    for (let y = 0; y < matrix.maxY; y++) {
        // if( line.length > 0 ) {
        //     console.log(line);
        //     line = "";
        toSumUp.push(handleLine(matrix, matrix.matrix, matrix.matrix[y], y));
        // }
        // for (let x = 0; x < matrix.maxX; x++) {

        //     // console.log(matrix.getNeighbours({ x, y }));

        //     // line += matrix.get({ x, y });
        //     let char = matrix.get({ x, y });
        //     let isDigit = matrix.isDigit({ x, y });
        //     let hasNeighbourSymbol = matrix.hasNeighbourSymbol({ x, y });

        //     if (isDigit && hasNeighbourSymbol) {
        //         let no = parseInt(matrix.get({ x, y }));
        //         toSumUp.push(no);
        //         while (matrix.isDigit({ x, y } || x < matrix.maxX)) {
        //             x++;
        //         }

        //     }
        // }
    }

    let res = toSumUp.reduce((acc, curr) => acc + curr, 0);
    // res += 448 + 478 + 424; // edge cases (solvable) // those number are on the right enge of the matrix

    let a = matrix.matrix.map((line) => line.join("")).join("\n");
    // console.log(a);
    return res.toString();
}

// 534001 + 448 = 534449
// 528435

function handleLine(matrix: ClassEngineMatrix, allLines: string[][], line: string[], y: number): number {

    let numbersCOrd = [];

    let isReadingNumber = false;
    let lastNumber = {
        num: 0,
        begin: 0,
        end: 0,
        hasSpecialSymbol: false,
    }
    let strLine = line.join("");
    // if (strLine.indexOf("543.448") > -1) {
    // console.log("here");
    // }

    for (let x = 0; x < line.length; x++) {
        let char = line[x];

        let isStar = char === '*';
        if (isStar === false) { 
            continue;
        }
        // if (char === "-" ) {
        //     if ( x < line.length -1 && line[x+1] >= "0" && line[x+1] <= "9" ) {
        //         isDigit = true;
        //     }
        // }



        // 543.448
        // if (lastNumber.num === 543 || lastNumber.num === 448) {
        //     console.log(lastNumber.num);
        // }


        // if (isStar && isReadingNumber === false) {
        //     lastNumber = {
        //         num: 0,
        //         begin: 0,
        //         end: 0,
        //         hasSpecialSymbol: false,
        //     }
        //     isReadingNumber = true;
        //     lastNumber.begin = x;
        // }
        // if (isStar) {
        //     lastNumber.num = lastNumber.num * 10 + parseInt(char);
        // }
        // if (isStar) {// let hasSpecial = false;
        let nums = [];
        // console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
        degit: for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                // if (i === 0 && j === 0) {
                //     continue;
                // }
                let ly = y + i;
                let lx = x + j;
                let lChar = matrix.get({ x: lx, y: ly });
                // console.log("$$$: " + lChar, "x: " + lx, "y: " + ly);
                // if (lChar === undefined) {
                //     continue;
                // }
                if (lChar !== undefined && lChar >= "0" && lChar <= "9") {
                    let { num, offset } = extractNumber(matrix, { x: lx, y: ly });
                    // console.log("Num: " + num, "x: " + lx, "y: " + ly);
                    nums.push(num);

                    if (j === -1) {
                        let mid = matrix.get({ x: lx + 1, y: ly });
                        if (mid !== undefined && mid >= "0" && mid <= "9") {
                            continue degit;
                        }
                    }
                    if (j === 0) {
                            continue degit;
                    }

                    // j += offset;
                    // lastNumber.hasSpecialSymbol = true;
                    // break degit;
                }

            }
        }
        // console.log("$$$$$$$$$$$$$$$$$$ Nums: " + nums.join(";"));

        if (nums.length < 2) {
            // console.log("---### Nums: " + nums.join(";"));
            continue;
        }
        if (nums.length == 2) {
            numbersCOrd.push(nums[0] * nums[1]);
            // console.log("Nums: " + nums.join(";"));
        }
        if (nums.length > 2) {
            throw new Error("More than 2 numbers in star" + nums);
            let uniq = new Set(nums);
            if (uniq.size !== 2) {
                console.log("### Nums: " + nums.join(";"));
            }
            let unArr = Array.from(uniq);
            numbersCOrd.push(unArr[0] * unArr[1]);
            // console.log("### Nums: " + nums.join(";") );
            // throw new Error("More than 2 numbers in star" + nums);
        }

        // }
        // if (isReadingNumber && isStar === false) {
        //     isReadingNumber = false;
        //     lastNumber.end = x - 1;
        //     numbersCOrd.push(lastNumber);
        //     if (lastNumber.hasSpecialSymbol) {
        //         for (let i = lastNumber.begin; i <= lastNumber.end; i++) {
        //             matrix.matrix[y][i] = "X";
        //         }
        //     }
        //     lastNumber = {
        //         num: 0,
        //         begin: 0,
        //         end: 0,
        //         hasSpecialSymbol: false,
        //     }
        /// numbers become X if hase special symbol
    }

    // }

    // console.log(numbersCOrd);
    // numbersCOrd = numbersCOrd.filter((number) => number.hasSpecialSymbol === true);
    // numbersCOrd.forEach((number) => {
    //     console.log(number.num);
    // });

    // let toSum = numbersCOrd.map((number) => {
    //     let no = parseInt(line.slice(number.begin, number.end+1).join(""));
    //     console.log(no);
    //     return no;
    // });

    // let sum = toSum.reduce((acc, curr) => acc + curr, 0);
    let sum = numbersCOrd.reduce((acc, curr) => acc + curr, 0);
    return sum;


    // let sum = 0;

    // numbersCOrd.forEach((number) => {
    //     let no = parseInt(line.slice(number.begin, number.end).join(""));
    //     console.log(no);
    // });



}

function extractNumber(matrix: ClassEngineMatrix, pos: TPostion): { num: number, offset: number } {
    let { x, y } = pos;

    while (matrix.isDigit({ x, y }) === true) {
        x--;
    }
    x = x + 1;
    let start = x;

    while (matrix.isDigit({ x, y }) === true) {
        x++;
    }
    x = x - 1;
    let end = x;

    let number = parseInt(matrix.matrix[y].slice(start, end + 1).join(""));
    return {
        num: number,
        offset: end - y,
    }
}

type TPostion = {
    x: number,
    y: number,
}

class ClassEngineMatrix {
    public matrix: string[][] = [];

    maxX: number = 0;
    maxY: number = 0;

    constructor(input: string) {

        this.maxX = input.split("\n")[0].length;
        this.maxY = input.split("\n").length;

        this.matrix = input.split("\n").map((line) => {
            return line.split("");
        });

        // console.table(this.matrix);
    }

    public get(pos: TPostion): string | undefined {
        const { x, y } = pos;

        try {
            return this.matrix[y][x];
        }
        catch {
            // throw new Error("Error in get pos: " + JSON.stringify(pos) + " maxX: " + this.maxX + " maxY: " + this.maxY);
            return undefined;
        }

        return this.matrix[y][x];

    }

    public isDigit(pos: TPostion): boolean {
        const { x, y } = pos;
        const char = this.get(pos);
        if (char === undefined) {
            return false;
        }
        return char >= "0" && char <= "9";
    }

    // public isSymbol( pos: TPostion ): boolean {

    public getNeighbours(pos: TPostion): string[] {
        const { x, y } = pos;
        let n = [
            this.get({ x: x - 1, y }),
            this.get({ x: x + 1, y }),
            this.get({ x, y: y - 1 }),
            this.get({ x, y: y + 1 }),
            // and diagonal
            this.get({ x: x - 1, y: y - 1 }),
            this.get({ x: x + 1, y: y - 1 }),
            this.get({ x: x - 1, y: y + 1 }),
            this.get({ x: x + 1, y: y + 1 }),
        ];

        n = n.filter((char) => char !== undefined);

        return n as string[];
    }

    public hasNeighbourSymbol(pos: TPostion): boolean {
        const neighbours = this.getNeighbours(pos);
        // return neighbours.some((char) => this.isDigit(pos) === false && char !== ".");

        for (let i = 0; i < neighbours.length; i++) {
            const ne = neighbours[i];

            const isDigit = this.isDigit(pos);
            const isSymbol = ne !== ".";

            if (isDigit === false && isSymbol) {
                return true;
            }
        }
        return false;
    }
}

