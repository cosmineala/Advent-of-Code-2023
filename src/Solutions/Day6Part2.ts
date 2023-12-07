export function solve_Day6Part2(input: string): string {

    let [timeLine, distanceLine] = input.split('\n');
    const vailableTime = parseInt(timeLine.replace('Time:', '').split(' ').filter(c => c !== '').join(''));
    const requieredDistance = parseInt(distanceLine.replace('Distance:', '').split(' ').filter(c => c !== '').join(''));

    let winingGames = 0;

    for (let j = 1; j < vailableTime; j++) {

        let hasTraveled = (vailableTime - j) * j;

        if (hasTraveled >= requieredDistance) {
            winingGames++;
        }
    }

    return winingGames.toString();
}

export const SOLUTION_DAY6_PART2 =
`export function solve_Day6Part2(input: string): string {

    let [timeLine, distanceLine] = input.split('\\n');
    const vailableTime = parseInt(timeLine.replace('Time:', '').split(' ').filter(c => c !== '').join(''));
    const requieredDistance = parseInt(distanceLine.replace('Distance:', '').split(' ').filter(c => c !== '').join(''));

    let winingGames = 0;

    for (let j = 1; j < vailableTime; j++) {

        let hasTraveled = (vailableTime - j) * j;

        if (hasTraveled >= requieredDistance) {
            winingGames++;
        }
    }

    return winingGames.toString();
}`;