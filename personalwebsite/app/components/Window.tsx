import React from 'react'
import { LuExternalLink } from "react-icons/lu";
import Image from "next/image"
import classNames from 'classnames';

interface IWindow {
    ImagesURLs: string[],
    link?: string,
    idx: number
}

const Window: React.FC<IWindow> = ({ ImagesURLs, link, idx }) => {
    return (
        <div
            className={classNames('bg-[#0e0e0f] w-[450px] h-[500px] border border-border group  no-scrollbar overflow-y-scroll',
               
            )} >
            <a target="_blank" rel="noopener noreferrer" href={link} className='flex items-center justify-between px-5 py-3 gap-3 h-14  sticky  bg-[#0e0e0f]   top-0 ' >
                <div className='flex items-center gap-2 justify-center  w-[10%]    ' >
                    <span className='w-2 h-2 bg-secondary group-hover:bg-red-500 rounded-full ' ></span>
                    <span className='w-2 h-2 bg-secondary group-hover:bg-yellow-500 rounded-full ' ></span>
                    <span className='w-2 h-2 bg-secondary group-hover:bg-green-500 rounded-full ' ></span>
                </div>
                <div className=' bg-secondary w-[70%] mx-auto py-1  h-full rounded-sm border border-border text-center text-grey group-hover:text-slate-200  ' >{link}</div>
                <div><LuExternalLink className='mx-auto  flex-1 text-secondary group-hover:text-slate-200 ' /></div>
            </a>
            <div  >
                {ImagesURLs && ImagesURLs.map((image, i) => (
                    <Image key={i} src={image} width={500} height={100} alt='showcase1' className='rounded-md border border-[#161619]  ' />
                ))}
            </div>
        </div>
    )
}

export default Window