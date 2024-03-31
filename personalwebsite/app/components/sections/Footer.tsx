import React from 'react'
import { LiaLinkedinIn } from 'react-icons/lia'
import { MdMailOutline } from 'react-icons/md'
import { WebsiteData } from '../../Data'
import { PersonalData} from '@/app/Data'
import classNames from 'classnames'
const Footer = ({classnames}: {classnames: string}) => {
   
    return (
        <div className={classNames(' p-2 flex flex-col lg:flex-row items-center justify-between  lg:items-end h-full lg:justify-end gap-2 lg:divide-x-2 divide-grey  ', classnames )} >
            <span className='flex gap-2 items-center ' >
                <a href={`mailto:${PersonalData.email}`}>
                    <MdMailOutline size={40} href={PersonalData.email} className="p-2 rounded-full text-grey hover:bg-grey duration-300 hover:text-[#0e0e0f]  " />
                </a>
                <a href={PersonalData.linkedIn} target="_blank" rel="noreferrer">
                    <LiaLinkedinIn size={40}  className="p-2 rounded-full text-grey hover:bg-grey duration-300 hover:text-[#0e0e0f]  " />
                </a>
            </span>
            <div className='text-grey lg:w-[50%] text-base pl-2 text-sm lg:text-md    ' dangerouslySetInnerHTML={{ __html: WebsiteData.siteDetails }}></div>
        </div>
    )
}

export default Footer