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
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        const get = async () => {
            const input = await downloadAndParseDayInput(day);
            setMyInput(input);
            textareaRef.current!.value = input;
        };
        get();
    }, []);

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
                        const res = solution(textareaRef.current!.value);
                        setRes(res);
                    }}
                >
                    [Solve Day{day} Part{part}]
                </button>
                <div className="text-xl text-yellow-600" >
                    {res}
                </div>
            </div>
        </>
    );
};

export default CProblemSolver;


