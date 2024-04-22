'use client'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import Window from '../Window'
import { SpecialText } from '../ui/Headings'
import { AppFont } from '@/app/Font'
import Badge from '../ui/Badge'
import classNames from 'classnames'
import { ProjectData } from '@/app/Data'
import { useScrollContext } from '@/app/utils/ScollContext'
import { getScrollPercentage } from '@/app/utils/utils'
import { FaGithub } from "react-icons/fa6";
interface IProject {
    isWorkSelected: 'work';
}

const Projects: React.FC<IProject> = ({ isWorkSelected }) => {
    const { setProjectSectionScrollPercentage } = useScrollContext()

    const updateScrollContext = (e: any) => {
        if (isWorkSelected === 'work') {
            const progress = getScrollPercentage(e)
            setProjectSectionScrollPercentage(progress);
        }
    }


    return (
        <section className=' scroll-smooth   '>
            <div onScroll={(e) => updateScrollContext(e)} className='w-full flex flex-col p-2 md:p-8 gap-2 md:max-h-[540px] scroll-smooth   overflow-y-scroll ' >
                {ProjectData && ProjectData.map((item, i) => (
                    <div key={i} className='flex flex-col  md:flex-row  ' >
                        <div className='p-4 bg-primary md:w-[40%] min-h-[300px] h-max flex flex-col   border border-border'>
                            <div className='flex items-center justify-between' >
                                <SpecialText font={AppFont.Koulen} className="text-accent" >{item.name}</SpecialText>
                                <div className='flex items-center gap-4' >
                                    <SpecialText font={AppFont.Inter} size='sm' className={classNames(item.liveStatus ? 'text-green-500' : 'text-red-500')} >{item.liveStatus ? 'live' : 'down'}</SpecialText>
                                    <span className={classNames('w-3 h-3 rounded-full after:[content("")] after:relative after:mx-auto after:w-3 after:h-3    ',
                                        item.liveStatus ? 'bg-green-500 after:animate-ping after:rounded-full flex  after:bg-green-500' : 'bg-red-500 after:bg-red-500')}  >
                                        {item.liveStatus}
                                    </span>
                                </div>
                            </div>
                            <div className=' text-grey font-inter text-sm my-2  font-normal  '>
                                {item.disc}
                            </div>
                            <span className=' inline flex-1  py-2' >
                                {item.TechStack && item.TechStack.map((tech, i) => (
                                    <Badge key={i}
                                        type='WithBorder'
                                        borderColor='border'
                                        size='small'
                                        font={AppFont.Koulen.className}
                                        content={tech}
                                        color='primary'
                                        backgroundColor='while_blue_gradient' />
                                ))}

                            </span>
                            {item.SourceCodeHosted && (
                                <a target="_blank" rel="noopener noreferrer" className='relative' href={item.repoLink} ><FaGithub width={10} height={10} className={classNames('absolute right-0 bottom-0 mb-1 text-grey hover:text-slate-200 ')} /></a>
                            )}
                        </div>
                        {item.liveStatus ? (
                            <Window idx={i} ImagesURLs={item.projectImages} link={item.link} />
                        ) : (
                            <Window idx={i} ImagesURLs={item.projectImages} />

                        )}
                    </div>
                ))}

            </div>
        </section>
    )
}

export default Projects