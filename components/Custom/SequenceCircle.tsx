import React from 'react'
import {chakra} from "@chakra-ui/react"
import SequenceItem from './SequenceItem'
import Image from "next/image"

export interface timeline_event {
    when: number;
    name: string;
    description?: string;
}

function SequenceCircle({timeline_duration, events, dimensions, click_event}:{timeline_duration: number, click_event?:()=>void , events: timeline_event[], dimensions?: {
    base: string,
    sm: string,
    md: string,
    lg: string,
    xl: string
} }) {
    const get_event_pos  = (when: number) =>{
        var ans = (when/timeline_duration) * 360
        return ans
    }
  return (
    <chakra.div display='flex' width="500px" position="relative" height="500px" border="2px solid white" borderRadius={"250px"} marginLeft="-350px" >
            <chakra.a cursor={"pointer"} textDecor="none" onClick={typeof click_event !== "undefined"  ? click_event : ()=>{

            }}  position={"absolute"}  top="230px" left="350px" >
                <Image src="/icons/CloseIcon.svg" width="36px" height="36px" />
            </chakra.a>
        {
            events.map(({when, name, description}, key)=>(
                <chakra.div key={key} transform={`rotate(${get_event_pos(when)}deg) translate(250px) rotate(-${get_event_pos(when)}deg)`} position="absolute"   top="230px" left="230px"  >
                    <SequenceItem angle={get_event_pos(when)} name={name} when={when} description={description} />
                </chakra.div>
            ))
        }

        {/* <chakra.div transform="rotate(90deg) translate(200px) rotate(-90deg)" position="absolute"   top="180px" left="180px"  >
            <SequenceItem/>
        </chakra.div>
        <chakra.div transform="rotate(45deg) translate(200px) rotate(-45deg)" position="absolute"   top="180px" left="180px"  >
            <SequenceItem/>
        </chakra.div> */}
    </chakra.div>
  )
}

export default SequenceCircle