import { Flex, Grid, GridItem, chakra } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { FlexColCenterCenter, FlexColCenterStart, FlexColStartStart, FlexRowCenterAround } from '../../../utils/FlexConfigs'
import DirectionButton from '../../Buttons/DirectionButton'
import HeaderButton from '../../Buttons/HeaderButton'
import Statbutton from '../../Buttons/Statbutton'

function Vehicle() {
  return (
    <Flex width="100%" {...FlexColStartStart} >
        <Grid width="100%" templateColumns={"60% 30%"} columnGap="48px" >
            <GridItem  position="relative" colSpan={1}  >
                <chakra.div position="absolute" left="0px" top="0px" >
                    <Image src="/icons/top_notch.svg" width="47px" height="29px"  />
                </chakra.div>
                <chakra.p marginBottom="24px"  fontSize={"18px"} padding="18px 18px" fontFamily="Roboto, sans-serif" >
                        The Dragon spacecraft is capable of carrying up to 7 passengers to and from Earth orbit, and beyond. It is the only spacecraft currently flying that is capable of returning significant amounts of cargo to Earth, and is the first private spacecraft to take humans to the space station.
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
                    <Image src="/DevAssets/crew_dragon.png" width="306px" height="552px"  />
            </GridItem>
        </Grid>
    </Flex>
  )
}

export default Vehicle