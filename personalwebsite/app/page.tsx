'use client'
import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Education from "./components/sections/Education";
import Introduction from "./components/sections/Introduction";
import Work from "./components/sections/Work";
import { ScrollProvider } from "./utils/ScollContext";
import Image from 'next/image'
import useRotatingAnimation from "./hooks/useRotatingAnimation";
import SkillSet from "./components/sections/SkillSet";
import { Blogs } from './Data'
import { ParagraphText } from "./components/ui/Headings";
import { AppFont } from "./Font";
import { BsEyeFill } from "react-icons/bs";
import Blog from "./components/sections/Blog";
import Footer from "./components/sections/Footer";
export default function Home() {


  return (
    <section className=" p-2 grid gap-2  grid-rows-[80px,1fr] w-full h-screen " >
      <div className=""  >
        <Navbar />
      </div>
      <div className="grid gap-2 xl:overflow-hidden   grid-rows-[525px,300px] grid-cols-1 lg:grid-cols-[1fr,900px]  " >
        <div className=" lg:row-span-1   " ><Introduction /></div>
        <div className="row-span-2   flex flex-col  " >
          <ScrollProvider>
            <Work />
          </ScrollProvider>
          <Footer classnames=" hidden lg:flex" />
        </div>
        <div className=" p-2 bg-primary rounded-3xl flex flex-col md:flex-row items-center gap-2"  >
          <Education />
          <SkillSet />
        </div>
        <Footer classnames=" lg:hidden block" />
      </div>
    </section>
  );
}

