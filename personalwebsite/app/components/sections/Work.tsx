'use client'
import React, { useEffect, useState } from 'react'
import { SpecialText } from '../ui/Headings'
import classNames from 'classnames';
import { AppFont } from '@/app/Font';
import Projects from './Projects';
import Experience from './Experience';
import MyJourney from './MyJourney';
import { useScrollContext } from '@/app/utils/ScollContext';
import Blog from './Blog';

const Work = () => {
    const { projectSectionScrollPercentage } = useScrollContext();
    const [navToggle, setNavToggle] = useState("work");

    return (
        <div className='min-h-[600px]' >
            <nav className='flex items-center gap-2 px-4 pt-2 '>
                <button onClick={() => setNavToggle('work')} type='button'>
                    <SpecialText
                        style={{ '--blue-percentage': '0%', '--white-percentage': navToggle === 'work' ? `${projectSectionScrollPercentage}%` : '0%' }}
                        className={classNames(navToggle === 'work' ? ('bg-while_blue_gradient bg-clip-text text-transparent text-clip ') : ('text-grey'))}
                        size={navToggle === 'work' ? '2xl' : 'md'}
                        font={AppFont.Koulen} >Work</SpecialText>
                </button>
                <button onClick={() => setNavToggle('blog')} type='button'>
                    <SpecialText
                        style={{ '--blue-percentage': '0%', '--white-percentage': navToggle === 'blog' ? `${projectSectionScrollPercentage}%` : '0%' }}
                        className={classNames(navToggle === 'blog' ? ('bg-while_blue_gradient bg-clip-text text-transparent text-clip ') : ('text-grey'))}
                        size={navToggle === 'blog' ? '2xl' : 'md'}
                        font={AppFont.Koulen} >blogs</SpecialText>
                </button>
            </nav>

            {navToggle == 'work' && (<Projects isWorkSelected={navToggle} />)}
            {navToggle == 'blog' && (<Blog />)}
            {/* {navToggle == 'journey' && (<MyJourney />)} */}

        </div>
    )
}

export default Work