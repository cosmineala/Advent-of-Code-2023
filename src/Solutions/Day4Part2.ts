type card = {
    pos: number,
    wins: number,
    count: number,
}

export function solve_Day4Part2(input: string): string {

    let cards: card[] = [];
    input.split("\n").forEach((line) => {
        cards.push(countWiningNumbers(line));
    });

    for (let i = 0; i < cards.length; i++) {
        incrementFollowingCardsCount(cards, cards[i])
    }

    let res = cards.reduce( (acc, cur) => {
        return acc + cur.count;
    },0 )

    return res.toString();
}


function countWiningNumbers(input: string): card{

    const regex = /Card\s+(\d+):\s(.*)\s+\|\s+(.*)/g;
    const matches = [...input.matchAll(regex)][0]

    let cardNo = parseInt(matches[1]);
    let set1 = new Set( matches[2].split(/\s+/g).map(x => parseInt(x)) );
    let set2 = new Set( matches[3].split(/\s+/g).map(x => parseInt(x)) );

    let sum = 0;
    set1.forEach((x) => {
        if (set2.has(x)) {
            sum += 1;
        }
    });
    
    return {
        pos: cardNo,
        wins: sum,
        count: 1
    }
}

function incrementFollowingCardsCount( cards: card[], card: card ){

    for (let i = card.pos; i < card.pos + card.wins; i++) {
        cards[i].count += card.count
    }
}

export const SOLUTION_DAY4_PART2 =
`type card = {
    pos: number,
    wins: number,
    count: number,
}

export function solve_Day4Part2(input: string): string {

    let cards: card[] = [];
    input.split("\\n").forEach((line) => {
        cards.push(countWiningNumbers(line));
    });

    for (let i = 0; i < cards.length; i++) {
        incrementFollowingCardsCount(cards, cards[i])
    }

    let res = cards.reduce( (acc, cur) => {
        return acc + cur.count;
    },0 )

    return res.toString();
}


function countWiningNumbers(input: string): card{

    const regex = /Card\\s+(\\d+):\\s(.*)\\s+\\|\\s+(.*)/g;
    const matches = [...input.matchAll(regex)][0]

    let cardNo = parseInt(matches[1]);
    let set1 = new Set( matches[2].split(/\\s+/g).map(x => parseInt(x)) );
    let set2 = new Set( matches[3].split(/\\s+/g).map(x => parseInt(x)) );

    let sum = 0;
    set1.forEach((x) => {
        if (set2.has(x)) {
            sum += 1;
        }
    });
    
    return {
        pos: cardNo,
        wins: sum,
        count: 1
    }
}

function incrementFollowingCardsCount( cards: card[], card: card ){

    for (let i = card.pos; i < card.pos + card.wins; i++) {
        cards[i].count += card.count
    }
}`;