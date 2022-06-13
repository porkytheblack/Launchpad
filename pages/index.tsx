import { Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import DirectionButton from '../components/Buttons/DirectionButton'
import SequenceCircle from '../components/Custom/SequenceCircle'
import DropDownMenu1 from '../components/Navs/DropDownMenu1'
import { FlexColCenterBetween, FlexColCenterCenter, FlexColCenterStart, FlexColStartStart } from '../utils/FlexConfigs'

const Home: NextPage = () => {
  return (
    <Grid {...FlexColCenterBetween} templateRows="60px auto 60px" display="flex"  width="100vw" height={"100vh"} backgroundImage="/DevAssets/dev_asset_1.png" backgroundSize={"cover"} backgroundRepeat="no-repeat" >
      <GridItem display="flex" width="100%" height="60px" {...FlexColCenterCenter} bg="rgba(0, 0, 0, 0.69)" backdropFilter={"auto"} backdropBlur="4px" >
          <DirectionButton icon_type='up' >
            Previous
          </DirectionButton>
      </GridItem>
      <GridItem rowSpan={1}  columnGap={"0px"} width="100vw" height="100%" >
        <Grid width="100%" height="100%" templateColumns={"20% 60% 20%"} columnGap="0px"    >
          <GridItem height="100%" colSpan={1} >
              <SequenceCircle timeline_duration={3} events={[
                {
                  when: 1,
                  name: "Lift Off"
                },
                {
                  name: "Mach 1",
                  when: 1.167
                },
                {
                  when: 1.383,
                  name: "Max Q"
                },
                {
                  when: 2.62,
                  name: "MECO"
                },
                {
                  when: 2.683,
                  name: "Stage 1 Separation"
                },
                {
                  when: 2.817,
                  name: "Stage 2 ignition"
                },
                {
                  when: 3.5,
                  name: "Nose cone jettison"
                }
              ]} />
          </GridItem>
          <GridItem display={"flex"}  {...FlexColCenterCenter} colSpan={1} >
              <DirectionButton icon_type='right' >
                  Play
              </DirectionButton>
          </GridItem>
          <GridItem padding="10px 10px" colSpan={1} >
              <Flex {...FlexColStartStart} height="100%" width="100%"  >
                <DropDownMenu1/>
              </Flex>
          </GridItem>
        </Grid>
       
      </GridItem>
      <GridItem display="flex" width="100%" height="60px" {...FlexColCenterCenter} bg="rgba(0, 0, 0, 0.69)" backdropFilter={"auto"} backdropBlur="4px" >
          <DirectionButton icon_type='down' direction='down'  >
            Upcoming
          </DirectionButton>
      </GridItem>
    </Grid>
  )
}

export default Home
