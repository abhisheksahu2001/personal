import React from 'react'
import { MainText, SpecialText } from '../ui/Headings'
import { AppFont } from '@/app/Font'
import { PersonalData } from "@/app/Data"
import TextChangeEffect from '../TextChangeEffect'
const Introduction = () => {
    return (
        <section className='p-[0.5px] backShin rounded-3xl border border-border h-full flex flex-col   ' >
            <SpecialText font={AppFont.Koulen} className='text-primary text-lg md:text-xl  lg:text-6xl m-2 font-thin px-2 ' >Introduction</SpecialText>
            <div className='m-[0.5px] p-5 bg-primary  rounded-3xl flex-1      '>
                <MainText style={{ '--white-percentage': '0%', '--blue-percentage': '35%' }}  className='text-lg lg:text-2xl bg-while_blue_gradient bg-clip-text text-transparent text-clip  ' font={AppFont.Inter}   >Abhishek <br /> Sahu.</MainText>
                <span className='flex items-center text-white font-Koulen text-md md:text-lg lg:text-xl ' >I Love <TextChangeEffect /></span>
                <div className='text-grey 2xl:w-3/4 mb-2 font-inter font-normal text-sm lg:text-lg md:text-md ' dangerouslySetInnerHTML={{ __html: PersonalData.intro }} ></div>
                <div className='text-grey 2xl:w-3/4  font-inter font-normal   text-sm lg:text-lg md:text-md ' dangerouslySetInnerHTML={{ __html: PersonalData.intro2 }} ></div>
            </div>
        </section>
    )
}

export default Introduction