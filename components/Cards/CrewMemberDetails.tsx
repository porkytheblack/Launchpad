import { GridItem, chakra, Grid } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { FlexColStartBetween, FlexColStartStart } from '../../utils/FlexConfigs'
import DirectionButton from '../Buttons/DirectionButton'

function CrewMemberDetails({name, org, img, link}:{name: string, org: string, img: string, link?: string}) {
  return (
    <GridItem bg="transparent" position={"relative"}  rowSpan={1} width="100%" >
        <Grid width="100%" templateColumns={"80px 75%"} columnGap="24px" height="100%" >
            <GridItem colSpan={1} >
                <Image src={img} width="80px" height="100px" alt={name} />
            </GridItem>
            <GridItem {...FlexColStartBetween} position="relative"  display="flex" colSpan={1} >
                <chakra.h3 fontSize="36px" >
                    {name} - {org}
                </chakra.h3>
                <DirectionButton icon_type='right' >
                    Read More
                </DirectionButton>
                <chakra.div position="absolute" right="0px" bottom="0px" >
                    <Image src="/icons/notched_bottom.svg" alt="notched_svg" width="36px" height="36px" />
                </chakra.div>
              
            </GridItem>
        </Grid>
       
    </GridItem>
  )
}

export default CrewMemberDetails