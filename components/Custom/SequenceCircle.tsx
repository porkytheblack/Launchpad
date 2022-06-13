import React from 'react'
import {chakra} from "@chakra-ui/react"
import SequenceItem from './SequenceItem'

export interface timeline_event {
    when: number;
    name: string;
    description?: string;
}

function SequenceCircle({timeline_duration, events, dimensions}:{timeline_duration: number, events: timeline_event[], dimensions?: {
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
    <chakra.div width="500px" position="relative" height="500px" border="2px solid white" borderRadius={"250px"} marginLeft="-350px" >

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