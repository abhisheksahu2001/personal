'use client'
import Image from 'next/image'
import useRotatingAnimation from '@/app/hooks/useRotatingAnimation'
import React from 'react'
import { SpecialText } from '../ui/Headings'
import { AppFont } from '@/app/Font'

const SkillSet = () => {
    const [setHoverOne, divRefOne] = useRotatingAnimation()
    const [setHoverTwo, divRefTwo] = useRotatingAnimation()
    const [setHoverThree, divRefTHree] = useRotatingAnimation()
    return (
        <div className='max-w-[500px] p-4 w-full h-full bg-[#0e0e0f] border border-border rounded-3xl flex flex-col'>
            <SpecialText className='text-accent' font={AppFont.Koulen} size='md'  >
                What can i do ?
            </SpecialText>
            <div className=" flex-1 flex gap-4 items-center justify-center  " >
                <div onMouseEnter={() => setHoverOne(true)} onMouseLeave={() => setHoverOne(false)} className="relative group " >
                    <div className="circleAnimationContainer group-hover:opacity-100 " >
                        <div style={{ '--angle': '88deg' }} ref={divRefOne} className="circleAnimation" ></div>
                    </div>
                    <Image className="relative z-1" src="FrontendIcon.svg"
                        height={200}
                        width={80}
                        alt="Frontend"
                    />
                    <div className='-z-1 m-auto w-min  px-2 border border-border text-slate-400 duration-300  
                opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 text-center absolute 
                left-0 right-0 -top-2 text-xxs  py-px bg-secondary rounded-full   ' >Frontend </div>
                </div>
                <div onMouseEnter={() => setHoverTwo(true)} onMouseLeave={() => setHoverTwo(false)} className="relative group " >
                    <div className="circleAnimationContainer group-hover:opacity-100 " >
                        <div style={{ '--angle': '88deg' }} ref={divRefTwo} className="circleAnimation" ></div>
                    </div>
                    <Image className="relative z-1" src="BackendIcon.svg"
                        height={200}
                        width={80}
                        alt="Frontend"
                    />
                    <div className='-z-1 m-auto w-min   px-2 border border-border text-slate-400 duration-300  
                opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 text-center absolute 
                left-0 right-0 -top-2 text-xxs  py-px bg-secondary rounded-full   ' >Backend </div>
                </div>
                <div onMouseEnter={() => setHoverThree(true)} onMouseLeave={() => setHoverThree(false)} className="relative group " >
                    <div className="circleAnimationContainer group-hover:opacity-100 " >
                        <div style={{ '--angle': '88deg' }} ref={divRefTHree} className="circleAnimation" ></div>
                    </div>
                    <Image className="relative z-1" src="UxIcon.svg"
                        height={200}
                        width={80}
                        alt="Frontend"
                    />
                    <div className='-z-1 m-auto w-min  px-2 border border-border text-slate-400 duration-300  
                opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 text-center absolute 
                left-0 right-0 -top-2 text-xxs  py-px bg-secondary rounded-full   ' >UI/UX</div>
                </div>

            </div >
        </div >
    )
}

export default SkillSet