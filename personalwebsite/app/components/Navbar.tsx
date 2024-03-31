import React from 'react'
import Image from 'next/image'
import { MdFileDownload } from "react-icons/md";
import { PersonalData} from '@/app/Data'
import Leetcode from './LeetCode';
const Navbar = () => {
    return (
        <section className='p-4'>
            <div className='flex items-center justify-between  ' >
                <div>
                    <Image src="/avatar.png" width={50} alt='profile' height={50} className='rounded-full' />
                </div>
                <div className='flex items-center gap-4'>

                
                   <Leetcode/>   
            
                <a href={PersonalData.cv} target='_blank'  className='flex group text-grey  duration-300 hover:text-slate-200  gap-1 border border-border rounded-full items-center  ' >
                    <p className=' pl-4 text-slate-300 uppercase text-xs font-semibold  text-inter' >Resume</p>
                    <MdFileDownload size={35} href='' className="p-2 rounded-full  " />
                </a>
                </div>
            </div>
        </section>
    )
}

export default Navbar