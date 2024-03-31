import classNames from 'classnames';
import { NextFontWithVariable } from 'next/dist/compiled/@next/font';
import React from 'react'
import { Interface } from 'readline'

interface IBadge {
    font: string;
    content: string;
    color: string;
    backgroundColor: string;
    type?: "WithBorder" | "WithOutBorder";
    size?: "small" | "medium" | "large";
    borderColor?: string;
}
/** 
 ** font = provide classname of font family  
 ** color = provide css var or color value
 * 
 * 
 */
const Badge: React.FC<IBadge> = ({ content, font }) => {
    return (
        <button className={classNames(`${font}`, ` mx-1 my-2  group relative rounded-full p-px text-[0.8125rem] font-semibold  leading-6 shadow-xl shadow-zinc-950 text-white`)}>
            <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                </span>
            </span>
            <div className="relative z-10 rounded-full capitalize tracking-widest    bg-gradient-to-b from-zinc-800 to-zinc-900 py-1 px-4  ring-white/10 flex items-center space-x-2">
                <span>{content}</span>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40">
            </span>
        </button>
    )
}

export default Badge