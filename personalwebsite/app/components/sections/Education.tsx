import React from 'react'
import { HighlightText, ParagraphText, SpecialText } from '../ui/Headings'
import { AppFont } from '@/app/Font'
import { EducationData } from '@/app/Data'

const Education = () => {
    return (
        <div className='max-w-[500px] p-4 w-full h-full bg-[#0e0e0f] border border-border rounded-3xl ' >
            <SpecialText className='text-accent' font={AppFont.Koulen} size='md'  >
                Education
            </SpecialText>
            <div className='mt-5 flex flex-col gap-4 '>
                {
                    EducationData && EducationData.map((school, idx) => (
                        <div key={idx} className='flex flex-col ' >
                            <HighlightText className='text-grey' size='sm' font={AppFont.Inter}>{school.SchoolName}</HighlightText>
                            <span className='flex flex-col gap-1' >
                                {school.Branch !== '' && (
                                    <ParagraphText size='xs' className={' font-thin text-slate-200'} font={AppFont.Inter}>{school.Branch}</ParagraphText>
                                )}
                                <span className='flex items-center justify-between' >
                                    <ParagraphText size='xs' className={' font-thin text-slate-200'} font={AppFont.Inter}>{school.Location}</ParagraphText>
                                    <span className='flex items-center gap-1' >
                                        <ParagraphText size='xs' className={' font-thin text-slate-200'} font={AppFont.Inter}>{school.start} - </ParagraphText>
                                        <ParagraphText size='xs' className={' font-thin text-slate-200'} font={AppFont.Inter}>{school.End}</ParagraphText>
                                    </span>
                                </span>

                            </span>
                        </div>

                    ))
                }
            </div>

        </div>
    )
}

export default Education