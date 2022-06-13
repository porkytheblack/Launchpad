import { Grid, GridItem, chakra } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

function SequenceItem({name, when, description, angle}: {name: string, when: number, description?: string, angle: number}) {
  console.log(name, " => " , angle)
  return (
    <Grid templateColumns={"40px 400px"}  columnGap="40px"  >
        <GridItem colSpan={1} >
            <Image src="/icons/current_launch_stage_icon.svg" width="60px" height="52px"  />
        </GridItem>
         <GridItem colSpan={1} >
              <chakra.a fontFamily={"MandatoryPlaything"} color="white" fontSize="12px" fontWeight="500" cursor={"pointer"} textDecoration="none" width="100%" height="100%" >
                    {name} @ {when}
              </chakra.a>
        </GridItem> 
    </Grid> 
  )
}

export default SequenceItem