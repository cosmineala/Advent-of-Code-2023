import Link from "next/link";

interface IProps{
    title: string,
    day: number,
}

const CDayTitle: React.FC<IProps> = ({ title, day }) => {
    return (
        <div className='flex flex-col lg:flex-row items-center lg:gap-6 py-3'>
            <h1 className='aoc-height text-xl' >--- Day {day}: {title} ---</h1>
            <h2><Link href={`https://adventofcode.com/2023/day/${day}`} target="_blank" className='text-primary hover:text-primaryHover'>view on Advent of code</Link></h2>
        </div>
    );
}

export default CDayTitle;