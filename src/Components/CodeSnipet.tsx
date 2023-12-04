"use client";
import React from "react";

interface IProps {
    className?: string;
    title?: string;
    code: string;
};

const CodeSnipet: React.FC<IProps> = ({ className, code, title }) => {
    return (
        <div className="flex flex-col max-w-fit" >
            <div className="flex gap-4 justify-between py-1 px-2 bg-[#32326f] rounded-t-md" >
                <div>{title}</div>
                <button className="text-primary hover:text-primaryHover active:bg-green-900"
                    onClick={() => {
                        navigator.clipboard.writeText(code);
                    }}
                >[copy]</button>
            </div>
            <div className={`border border-gray-600 p-1 overflow-auto`} >
                <pre className='w-fit' >
                    <code>{code}</code>
                </pre>
            </div>
        </div>

    );
};

export default CodeSnipet;