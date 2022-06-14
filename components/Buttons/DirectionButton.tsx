import React from 'react'
import BaseNodgeButton from './BaseNodgeButton'
import {ChevronRightIcon, ChevronLeftIcon, ChevronDownIcon, ChevronUpIcon} from "@chakra-ui/icons"

function DirectionButton({children, icon_type, direction, click_event}: {children: string, icon_type: "left" | "right" | "up" | "down", direction?: "up" | "down", click_event?: ()=>void}) {
  return (
    <BaseNodgeButton direction={direction} click_event={click_event} icon={icon_type == "left" ? <ChevronLeftIcon color="black" fontSize="24px"  /> : icon_type == "right" ? <ChevronRightIcon fontSize="24px" color="black"  /> : icon_type == "down" ? <ChevronDownIcon color="black" fontSize="24px" /> : <ChevronUpIcon fontSize={"24px"} color="black" />  } >   
        {children}
    </BaseNodgeButton>
  )
}

export default DirectionButton