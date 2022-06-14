import { Grid, GridItem, chakra } from '@chakra-ui/react'
import Image from 'next/image'
import React, { useState } from 'react'
import FullButtonwithNodge from '../Buttons/FullButtonwithNodge'

function SequenceDropdown({children}: {children?: string}) {
    const [view_details, set_view_details] = useState<boolean>(false)

    const toggle_view_details = () =>{
        set_view_details(!view_details)
    }
  return (
    <Grid templateRows="40px auto" rowGap="0px"  >
    <GridItem rowSpan={1} >
      <FullButtonwithNodge click_event={toggle_view_details} icon_name='current_launch_stage_icon' bg="rgba(0 ,0 ,255, 0.3)" >
        MECO
      </FullButtonwithNodge>
    </GridItem>
    <GridItem rowSpan={1} >
    {view_details && <Grid templateColumns={"20px auto"} bg="rgba(0 ,0 ,0, 0.6)" backdropFilter={"auto"}  backdropBlur="24px" columnGap="20px" >
    <GridItem>
            <Image src="/icons/bullet.svg" width="24px" height="24px"  />
        </GridItem>
        <GridItem>
            <chakra.p padding="0px 0px 10px 10px" fontFamily={"Roboto, sans-serif" } fontSize="18px" textAlign={"left"} >
            During this stage, the merlin engine separates from the payload after reaching, the payload’s required orbit
            </chakra.p>
        </GridItem>
    </Grid>}
    </GridItem>
  </Grid>
  )
}

export default SequenceDropdown


