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
                <span key={blog.id} className="flex gap-2 items-center" >
                    <Image src={blog.icon} width={80} height={80} />
                    <div className="flex flex-col items-start gap-2  " >
                        <ParagraphText className="text-grey" size="md" font={AppFont.Inter}>{blog.title}</ParagraphText>
                        <span className="flex items-center gap-2 " >
                            <span><ParagraphText className="text-grey" size="sm" font={AppFont.Inter}>{blog.date}</ParagraphText></span>
                            <BsEyeFill className="text-white" />
                            <ParagraphText className="text-grey" size="sm" font={AppFont.Inter}>{blog.views}</ParagraphText>
                        </span>
                    </div>
                </span>

            ))}
        </div>
    )
}

export default Blog