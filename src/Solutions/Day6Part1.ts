export function solve_Day6Part1(input: string): string {

    let [timeLine, distanceLine ] = input.split('\n');
    const times = timeLine.replace('Time:','').split(' ').filter(c => c !== '').map(c => parseInt(c));
    const requieredDistances = distanceLine.replace('Distance:','').split(' ').filter(c => c !== '').map(c => parseInt(c));

    // for each game
    let res = 1;
    for (let i = 0; i < times.length; i++) {
        const time = times[i];
        const reqDis = requieredDistances[i];

        let winingGames = 0;
        for (let j = 1; j < time; j++) {
            let hasTraveled = (time - j) * j;

            if ( hasTraveled >= reqDis){
                winingGames++;
            }
        }
        res *= winingGames;
    }

    return res.toString();
}

export const SOLUTION_DAY6_PART1 =
`export function solve_Day6Part1(input: string): string {

    let [timeLine, distanceLine ] = input.split('\\n');
    const times = timeLine.replace('Time:','').split(' ').filter(c => c !== '').map(c => parseInt(c));
    const requieredDistances = distanceLine.replace('Distance:','').split(' ').filter(c => c !== '').map(c => parseInt(c));

    // for each game
    let res = 1;
    for (let i = 0; i < times.length; i++) {
        const time = times[i];
        const reqDis = requieredDistances[i];

        let winingGames = 0;
        for (let j = 1; j < time; j++) {
            let hasTraveled = (time - j) * j;

            if ( hasTraveled >= reqDis){
                winingGames++;
            }
        }
        res *= winingGames;
    }

    return res.toString();
}`;