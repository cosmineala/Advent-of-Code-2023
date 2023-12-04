import { channel } from "diagnostics_channel";
import { format } from "util";
// 31480
// 25592
// 15827

export function solve_Day4Part1(input: string): string {
    // for each line, add first and last number
    let res = input.split("\n").reduce((acc, curr) => {
        return acc + addFirstANdLastNumberFromString(curr);
    }, 0);

    return res.toString();
    return "";
}

function addFirstANdLastNumberFromString(input: string): number {
    let [c1, c2] = input.split("|");
    let sum = 0;
    // delete string matching regex "Card \d+" from c1
    const regexfirst = /Card.*\d+: /g;
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
            if (sum === 0) {
                sum += 1;
            } else {
                sum *= 2;
            }
            mList.push(x);
            // sum += 1;
            // if (sum === 0) {
            // } else {
            //     sum += 2;
            // }
        }
    });

    // console.log(  c1, c2, sum, i,"\n",c1Set,"|",c2Set);
    console.log(  c1,"|", c2, sum, mList.join(" "));

    // for(  let i=0; i < sum; i++) {

    return sum ;
    
    

}



export const SOLUTION_DAY4_PART1 =
``;

// 1 2 4 8