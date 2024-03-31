import Image from 'next/image'
import { Blogs } from '@/app/Data'
import React from 'react'
import { ParagraphText } from '../ui/Headings'
import { AppFont } from '@/app/Font'
import { BsEyeFill } from 'react-icons/bs'

const Blog = () => {
    return (
        <div className="flex gap-4 flex-col p-5 px-4 " >
            {Blogs && Blogs.map((blog) => (
                <a href={blog.link} key={blog.id} target="_blank" className='hover:border hover:border-border w-2/3 bg-primary rounded-lg p-4  ' >
                <span className="flex gap-4 items-center  " >
                    <Image alt='icon' src={blog.icon} width={80} height={80} />
                    <div className="flex flex-col items-start gap-2  " >
                        <ParagraphText className="text-gray-400" size="md" font={AppFont.Inter}>{blog.title}</ParagraphText>
                        <span className="flex items-center gap-2 " >
                            {blog.tags && blog.tags.map((tag)=>(
                               <p className='bg-border p-1 rounded-md text-xs text-accent' >{tag}</p>  
                            ))}
                        </span>
                        <span className="flex flex-col gap-1" >
                            {blog.highlights && blog.highlights.map((highlight)=>(
                                <p className='text-xs text-accent underline' >{highlight}</p>
                            ))}
                        </span>
                        <span className="flex items-center gap-2 " >
                            <span><ParagraphText className="text-gray-400" size="sm" font={AppFont.Inter}>{blog.date}</ParagraphText></span>
                            <BsEyeFill className="text-grey" />
                            <ParagraphText className="text-gray-400" size="sm" font={AppFont.Inter}>{blog.views}</ParagraphText>
                        </span>
                    </div>
                </span>
                </a>

            ))}
        </div>
    )
}

export default Blog