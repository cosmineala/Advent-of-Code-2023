import Link from "next/link";
import React from "react";

interface IProps { };

const Header: React.FC<IProps> = () => {
    return (
        <header>
            <div className='flex flex-col items-center p-6 gap-2' >
                <h1
                    className='aoc-height text-2xl'
                >
                    {/* <Link href={'https://adventofcode.com/'} target="_blank" > */}
                    <Link href={'/'}>
                        Advent of code 2023
                    </Link>
                </h1>

                <h2>
                    <Link href={'https://github.com/cosmineala'} target="_blank" className='text-primary hover:text-primaryHover' >
                        Solved by Capisizu Cosmin
                    </Link>
                </h2>
            </div>
            {/* <Link
                className="pl-4 text-primary hover:text-primaryHover"
                href={'/'}
            >
                [List of]
            </Link> */}
        </header>
    );
};

export default Header;