import { Flex, chakra } from '@chakra-ui/react'
import React from 'react'
import { FlexColStartStart } from '../../../utils/FlexConfigs'
import Crew from './Crew'
import Destination from './Destination'
import Vehicle from './Vehicle'

function Details({header, content}:{header: "crew" | "mission" | "payload" | "destination" | "vehicle", content: any[] | any}) {
  return (
    <Flex {...FlexColStartStart} overflowY="scroll" fontFamily="MandatoryPlaything" fontSize="24px" color="white" width="100%" height="100%" >
         
        {
            typeof content !== "undefined" && <>
                {
                    header == "crew" ? (
                        <Crew crew={content} />
                    ) : header == "vehicle" ? (
                        <Vehicle/>
                    ): header == "destination" ? (
                        <Destination/>
                    ) : (
                        <>
                        
                        </>

                    )
                }
            </>
        }
    </Flex>
  )
}

export default Details