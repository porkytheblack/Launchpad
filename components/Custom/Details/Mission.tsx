import { Flex, chakra } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { FlexColStartStart } from '../../../utils/FlexConfigs'

function Mission() {
  return (
    <Flex width="100%" {...FlexColStartStart} padding="24px 10px" >
        <chakra.div marginBottom="20px" position={"relative"} width="880px" height="410px"  >
            <Image src="/DevAssets/mission_details.png" width="866px" height="400px" />
            <chakra.div position="absolute" bottom="0px" right="0px" >
                <Image src="/icons/bottom_notch.svg" width="47px" height="29px" />
            </chakra.div>
        </chakra.div>
        <chakra.p fontSize="24px" fontFamily={"'Roboto', sans-serif"}  >
            This mission is aimed at safely returning the four crew members from the I.S.S. back to earth. 
        </chakra.p>
    </Flex>
  )
}

export default Mission