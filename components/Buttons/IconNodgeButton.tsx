import React, { ReactNode } from 'react'
import {chakra, Flex} from "@chakra-ui/react"
import { FlexColCenterCenter } from '../../utils/FlexConfigs'


function IconNodgeButton({children, click_event}: {children: ReactNode, click_event?: (()=> void) | ((t: any)=>void)}) {
  return (
    <chakra.button style={{cursor: "pointer"}} onClick={click_event} textDecor={"none"} >
        <Flex width="60px" height="60px" {...FlexColCenterCenter} bg="rgba(0, 0, 0, 0.3)" backdropFilter={"auto"} backdropBlur="12px" clipPath={"polygon( 0% 100%, 75% 100%, 100% 75%, 100% 0%, 0% 0% )"} >
            {children}
        </Flex>
    </chakra.button>
  )
}

export default IconNodgeButton