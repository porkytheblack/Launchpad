import { Flex, Grid, GridItem, chakra } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { FlexColCenterCenter, FlexColCenterStart, FlexColStartStart, FlexRowCenterAround } from '../../../utils/FlexConfigs'
import DirectionButton from '../../Buttons/DirectionButton'
import HeaderButton from '../../Buttons/HeaderButton'
import Statbutton from '../../Buttons/Statbutton'

function Destination() {
  return (
    <Flex width="100%" {...FlexColStartStart} >
    <Grid width="100%" templateColumns={"60% 30%"} columnGap="48px" >
        <GridItem  position="relative" colSpan={1}  >
            <chakra.div position="absolute" left="0px" top="0px" >
                <Image src="/icons/top_notch.svg" width="47px" height="29px"  />
            </chakra.div>
            <chakra.p marginBottom="24px"  fontSize={"18px"} padding="18px 18px" fontFamily="Roboto, sans-serif" >
            An international space labaratory built in the 90’s and early 2000’s to enable research by scientists in space. It orbits the earth at an orbit of about 420 KM above the earth’s atmosphere.
            </chakra.p>
            <DirectionButton icon_type='right' >
                Read More
            </DirectionButton>
            
            <Flex width="100%" paddingTop={"100px"} {...FlexColCenterStart} >
                <HeaderButton text="Statistics" >
                    <Image src="/icons/Stats.svg" width="25px" height="27px" />
                </HeaderButton>
                <Flex width="100%" {...FlexRowCenterAround}  >
                    {
                        [
                            {
                                text: "Launches",
                                num: 34
                            },
                            {
                                text: "i.s.s visits",
                                num: 31
                            },
                            {
                                text: "re-flies",
                                num: 14
                            }
                        ].map(({text, num}, key)=>(
                            <chakra.div  >
                                <Statbutton stat={num} key={key}  > 
                                    {text}
                                </Statbutton>
                            </chakra.div>
                            
                        ))
                    }
                    
                </Flex>
            </Flex>

        </GridItem>
        <GridItem display="flex" {...FlexColCenterCenter} colSpan={1} >
                <Image src="/DevAssets/iss.png" width="374px" height="334px"  />
        </GridItem>
    </Grid>
</Flex>
  )
}

export default Destination