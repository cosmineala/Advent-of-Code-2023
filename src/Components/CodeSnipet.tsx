"use client";
import React from "react";

interface IProps {
    className?: string;
    code: string;
};

const CodeSnipet: React.FC<IProps> = ({ className, code }) => {
    return (
        <div className={`border border-gray-600 p-1 overflow-auto max-w-fit`} >
            <pre className='w-fit' >
                <code>{code}</code>
            </pre>
        </div>

    );
};

export default CodeSnipet;