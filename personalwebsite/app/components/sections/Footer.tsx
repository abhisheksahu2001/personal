import React from 'react'
import { LiaLinkedinIn } from 'react-icons/lia'
import { MdMailOutline } from 'react-icons/md'
import { WebsiteData } from '../../Data'
import { PersonalData} from '@/app/Data'
const Footer = () => {
   
    return (
        <div className='p-2 flex items-end h-full justify-end gap-2 divide-x-2 divide-grey  ' >
            <span className='flex gap-2 items-center ' >
                <a href={`mailto:${PersonalData.email}`}>
                    <MdMailOutline size={40} href={PersonalData.email} className="p-2 rounded-full text-grey hover:bg-grey duration-300 hover:text-[#0e0e0f]  " />
                </a>
                <a href={PersonalData.linkedIn} target="_blank" rel="noreferrer">
                    <LiaLinkedinIn size={40}  className="p-2 rounded-full text-grey hover:bg-grey duration-300 hover:text-[#0e0e0f]  " />
                </a>
            </span>
            <div className='text-grey w-[50%] text-base pl-2   ' dangerouslySetInnerHTML={{ __html: WebsiteData.siteDetails }}></div>
        </div>
    )
}

export default Footer