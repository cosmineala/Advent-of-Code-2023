type triple = [number, number, number];

export function solve_Day5Part2(input: string): string {

    const inArr = input.split("\n\n");
    const seedsIn = inArr[0].slice('seeds: '.length, inArr[0].length - 1).split(' ').map(s => parseInt(s));

    let map: triple[][] = []

    for (let i = 1; i < inArr.length; i++) {
        const inLines = inArr[i];
        let inDataSet = inLines.split('\n').slice(1, inLines.length - 1).map(l => l.split(' ').map(n => parseInt(n))) as triple[];
        map.push(inDataSet);
    }
    map = map.reverse();


    for (let i = 0; i < 1_000_000_000; i ++) {
        let mabyOneOFMySeeds = getSeedFromPos(map, i)

        let weHaveThis = doWeHaveThisSeed( seedsIn, mabyOneOFMySeeds )

        if( weHaveThis ){
            return i.toString();
        }

    }

    return 'Is already Advent of code 2033';
}

function getSeedFromPos(map: triple[][], seed: number): number {
    map: for (let i = 0; i < map.length; i++) {
        const mapLines = map[i];

        for (let i = 0; i < mapLines.length; i++) {
            const line = mapLines[i];
            // Swap source and dest
            let [source, destination, range] = line;
            
            if (seed >= source && seed <= source + range) {
                let offset = seed - source;
                seed = destination + offset;
                continue map;
            }
        }

    }

    return seed;
}

function doWeHaveThisSeed( seedsIn: number[], seedIFound: number ): boolean {

    for (let i = 0; i < seedsIn.length; i+=2) {
        const start = seedsIn[i];
        const count = seedsIn[i+1];
        const end = start + count - 1;
        if( seedIFound >= start && seedIFound <= end ){
            return true;
        }
    }

    return false;

}

export const SOLUTION_DAY5_PART2 =
    ``;
