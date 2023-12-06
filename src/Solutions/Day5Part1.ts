type triple = [number, number, number];

export function solve_Day5Part1(input: string): string {

    const inArr = input.split("\n\n");
    const seeds = inArr[0].slice('seeds: '.length, inArr[0].length - 1).split(' ').map(s => parseInt(s));
    console.log(seeds.join(','));

    const map: triple[][] = []

    for (let i = 1; i < inArr.length; i++) {
        const inLines = inArr[i];
        let inDataSet = inLines.split('\n').slice(1, inLines.length - 1).map(l => l.split(' ').map(n => parseInt(n))) as triple[];
        map.push(inDataSet);
    }

    let dest = seeds.map(seed => {

        map: for (let i = 0; i < map.length; i++) {
            const mapLines = map[i];

            for (let i = 0; i < mapLines.length; i++) {
                const line = mapLines[i];
                let [destination, source, range] = line;

                if( seed >= source && seed <= source + range ){
                    let offset = seed - source;
                    seed = destination + offset;
                    continue map;
                }
            }

        }

        return seed;
    });

    let min = dest[0];
    let index = -1;

    dest.forEach( (d,i) => {
        // console.log(seeds[i], d  )
        if (d < min){
            min = d;
            index = 1;
        }
    } )


    return min.toString();

}

export const SOLUTION_DAY5_PART1 =
    ``;