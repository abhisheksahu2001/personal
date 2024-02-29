import TextContent from "@/components/TextContent";
import Container from "@/components/Container";
import classNames from "classnames";
import { useEffect, useState } from "react";

const Skills = () =>{
    const [animation , setAnimations] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            setAnimations(!animation)
        } , 4000)
    },[animation])
    return (
        <Container classname={classNames(" duration-500 ")} >
            <TextContent content="Skills" size="sm" classname="font-light"  />
            <div className="w-full h-[1px] bg-border mt-1 " ></div>
        </Container> 
)
}
export default Skills
