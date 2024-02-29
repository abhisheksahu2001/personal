import Image from "next/image";
import { Inter } from "next/font/google";
import KnowMe from "@/sections/KnowMe";
import Introduction from "@/sections/Introduction";
import Projects from "@/sections/Projects";
import Blogs from "@/sections/Blogs";
import Skills from "@/sections/Skills";
import SocialLinks from "@/sections/SocialLinks";
import Education from "@/sections/Eductaion";
import maskImg from "@/public/mask.webp"
import TextContent from "@/components/TextContent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={` bg-primary flex min-h-screen flex items-center justify-center md:p-14 ${inter.className}`}
    >
     {/* <TextContent content="Hello Word This is Abhishek"   /> */}
      <div className="grid [&>div]:border [&>div]:text-white [&>div]:border-border  [&>div]:rounded-md
       grid-rows-[repeat(4,_minmax(1px,_1fr))]   gap-[12px] grid-cols-[1fr,1fr,1fr,1fr,100px,200px] 
         md:w-[1000px] md:h-[600px] h-[900px] w-full  " >
          <div className=" col-span-4  row-start-4 row-end-6 md:row-start-1 md:col-span-2 md:row-span-2  bg-secondary" >
            <KnowMe/>
          </div>
          <div className="col-span-2 row-start-1 md:row-start-1 row-span-3  col-span-2     bg-secondary" >
            <Introduction/>
          </div>
          <div className="col-span-2 row-span-3 bg-secondary" >
            <Projects/>
          </div>
          <div className="col-span-4 row-span-1  md:col-span-2 md:row-span-1 bg-secondary" >
            <Blogs/>
          </div>
          <div  className="col-span-4  row-span-2 md:col-span-2 md:row-span-2 " >
            <Skills/>
          </div>
          <div className="col-span-4  md:col-span-2 md:row-span-2 bg-secondary" >
            <SocialLinks/>
          </div>
          <div className="col-span-4  md:col-span-2 md:row-span-2 bg-secondary" >
            <Education/>
          </div>
      </div>
    </main>
  );
}
