import { Grid, GridItem, chakra } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { FlexColCenterCenter, FlexRowCenterStart } from '../../utils/FlexConfigs'

function FullButtonwithNodge({children,icon_name, bg, click_event}:{children: string,icon_name: string, bg: string, click_event?: ()=>void}) {
  return (
    <chakra.a onClick={click_event} cursor={"pointer"} >
         <Grid  templateColumns="40px 300px 40px" >
                <GridItem bg={bg} colSpan={1} display="flex" {...FlexColCenterCenter} >
                    <Image src={`/icons/${icon_name}.svg`} width="36px" height="36px" />
                </GridItem>
                <GridItem bg={bg} colSpan={1} display="flex" {...FlexRowCenterStart} >
                    <chakra.p fontSize={"24px"} fontWeight="500" color="white" fontFamily="MandatoryPlaything"  >
                        {children}
                    </chakra.p>
                </GridItem>
                <GridItem bg={bg} colSpan={1}  height="100%"  clipPath="polygon(50% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 0% )" >

                </GridItem>
            </Grid>
    </chakra.a>
   
  )
}

export default FullButtonwithNodge