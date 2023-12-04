import { channel } from "diagnostics_channel";
import { format } from "util";
// 31480
// 25592
// 15827

export function solve_Day4Part2(input: string): string {
    // for each line, add first and last numbe
    let map = new Map<number, number>();
    let res = input.split("\n").forEach((curr) => {
        let [a, b] = addFirstANdLastNumberFromString(curr);
        map.set(a, b);
    }, 0);

    // return res.toString();
    // return "";

    let a = Array.from(map.entries()).map((x) => {
        return [x[0], x[1], 1];
    });
    
    for (let i = 0; i < a.length; i++) {
        let [key, value, sum] = a[i];
        console.log(key, value, sum);
    }
    console.log("-----");

    for (let i = 0; i < a.length; i++) {
        let [key, value, sum] = a[i];


        for (let j = 1; j <= value && i + j < a.length; j++) {
            let [key2, value2, sum] = a[i + j];

            a[i + j] = [key2, value2, sum + 1];

        }
    }

    for (let i = 0; i < a.length; i++) {
        let [key, value, sum] = a[i];
        console.log(key, value, sum);
    }


    let sum = a.reduce((acc, curr) => {
        return acc + curr[2];
    }, 0);
    return sum.toString();
}

function addFirstANdLastNumberFromString(input: string): [number, number] {
    let [c1, c2] = input.split("|");
    let sum = 0;
    // delete string matching regex "Card \d+" from c1
    const regexfirst = /Card.*(\d+): /g;
    let cardNo = parseInt(Array.from(input.matchAll(regexfirst))[0][1]);
    c1 = c1.toString().replace(regexfirst, "");
    // delate last channel
    // c1 = c1.slice(0, c1.length - 1);

    // c2 = c2.slice(0, c2.length - 1);
    // c2 = c2.slice(1, c2.length );



    let c1Set = new Set(c1.split(" ").map((x) => parseInt(x)));
    let c2Set = new Set(c2.split(" ").map((x) => parseInt(x)));

    c1Set.delete(NaN);
    c2Set.delete(NaN);
    let mList = [];
    let i = 0;

    c1Set.forEach((x) => {
        if (c2Set.has(x)) {
            i++;
            // if (sum === 0) {
            sum += 1;
            // } else {
            // sum *= 2;
            // }
            // mList.push(x);
            // sum += 1;
            // if (sum === 0) {
            // } else {
            //     sum += 2;
            // }
        }
    });

    // console.log(  c1, c2, sum, i,"\n",c1Set,"|",c2Set);
    // console.log(  c1,"|", c2, sum, mList.join(" "));

    // for(  let i=0; i < sum; i++) {
    // console.log(cardNo,sum);

    return [cardNo, sum];



}



export const SOLUTION_DAY4_PART1 =
    ``;

// 1 2 4 8