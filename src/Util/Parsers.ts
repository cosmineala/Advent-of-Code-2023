// export async function downloadAndParseDayInput(day: number): Promise<string> {
//     const input = await  fetch(`https://adventofcode.com/2023/day/${day}/input`, {
//         method: 'GET',
//         cache: 'force-cache',
//     })
//     return await input.text();
// }
export async function downloadAndParseDayInput(day: number): Promise<string> {
    let res = await fetch(`/inputs/day${day}.txt`, { 
        method: 'GET',
        cache: 'no-cache',
    })
    return await res.text();
}

