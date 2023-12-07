"use client";
import React, { useEffect } from "react";
import { downloadAndParseDayInput } from "../Util/Parsers";
import { text } from "stream/consumers";
import getSolution from "@/Solutions/solutionMap";

interface IProps {
    day: number;
    part: number;
 };

const CProblemSolver: React.FC<IProps> = ({day,part}) => {

    const [res, setRes] = React.useState<string>("");
    const [myInput, setMyInput] = React.useState<string>("");
    const [time,setTime] = React.useState<string>("");
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        const get = async () => {
            const input = await downloadAndParseDayInput(day);
            setMyInput(input);
            textareaRef.current!.value = input;
        };
        get();
    }, [day]);

    return (
        <>
            <div className="flex justify-between">
                <h1 className="text-xl text-primary">My editable input:</h1>
                <button className=" text-primary hover:text-primaryHover " onClick={() => { textareaRef.current!.value = myInput }} >[reset]</button>
            </div>
            <textarea ref={textareaRef} wrap="off" className="bg-black w-full h-56 overflow-scroll" name="input" id=""></textarea>
            <div className="flex gap-4" >
                <button
                    className="text-xl text-primary hover:text-primaryHover"
                    onClick={ () => {
                        let solution = getSolution(day,part);
                        const start = Date.now();
                        const res = solution(textareaRef.current!.value);
                        const end = Date.now();
                        const pased = end - start;
                        
                        setRes(res);
                        setTime(pasedTimeToString(pased));
                    }}
                >
                    [Solve Day{day} Part{part}]
                </button>
                <div className="text-xl text-yellow-600" >
                    {res}{res !== ''?' | ':''}{time}
                </div>
            </div>
        </>
    );
};

export default CProblemSolver;

function pasedTimeToString( pased: number ): string {
    if (pased < 1_000){
        return `${pased} ms`
    }

    return `${ Math.floor(pased / 1_000)} seconds and ${pased%1_000} ms`;

}


