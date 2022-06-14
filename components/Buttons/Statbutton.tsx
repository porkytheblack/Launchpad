import React, { ReactNode } from 'react'
import {chakra, Flex} from "@chakra-ui/react"
import { FlexRowCenterStart } from '../../utils/FlexConfigs'
import Image from 'next/image'

function Statbutton({children, stat}:{children: string | ReactNode ,stat: number}) {
  return (
    <Flex fontWeight="500" width="200px"  fontFamily={"MandatoryPlaything"} {...FlexRowCenterStart} padding="18px 0px" position="relative" >
        <chakra.h4 marginRight={"20px"} fontSize={"36px"} >
            {stat}
        </chakra.h4>
        <chakra.p fontSize="18px" >
            {children}
        </chakra.p>
        <chakra.div position="absolute" bottom="0px" right="0px" >
            <Image src="/icons/bottom_notch.svg" width="47px" height={"29px"}  />
        </chakra.div>

    </Flex>
  )
}

export default Statbutton