import { Flex, Grid, GridItem, Text, chakra, IconButton } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { createContext, useEffect, useState } from 'react'
import BaseNodgeButton from '../components/Buttons/BaseNodgeButton'
import DirectionButton from '../components/Buttons/DirectionButton'
import FullButtonwithNodge from '../components/Buttons/FullButtonwithNodge'
import CrewMemberDetails from '../components/Cards/CrewMemberDetails'
import Details from '../components/Custom/Details'
import Destination from '../components/Custom/Details/Destination'
import Mission from '../components/Custom/Details/Mission'
import Vehicle from '../components/Custom/Details/Vehicle'
import Player, { p_status } from '../components/Custom/Player'
import SequenceCircle from '../components/Custom/SequenceCircle'
import SequenceDropdown from '../components/Custom/SequenceDropdown'
import DropDownMenu1 from '../components/Navs/DropDownMenu1'
import { FlexColCenterBetween, FlexColCenterCenter, FlexColCenterStart, FlexColStartCenter, FlexColStartStart } from '../utils/FlexConfigs'

export interface details_context {
  current_details: null | "crew" | "payload" | "destination" | "mission" | "vehicle",
  set_current_details?: (detail: "crew" | "payload" | "destination" | "mission" | "vehicle") => void
}

export interface video_details {
  duration: number,
  current_time: number,
  get_current_time?: (cur: number)=>  void,
  get_duration?: (dur: number)=>void,
  get_player_status?: (ps: p_status) =>void,
  player_status: p_status
}

export const CurrentDetailsContext = createContext<details_context>({
  current_details: null
})

export const VideoDetailsContext = createContext<video_details>({
  duration: 0,
  current_time: 0,
  player_status: "unstarted"
})


const Home: NextPage = () => {
  const [current_details, set_current_details] = useState<"crew" | "payload" | "destination" | "mission" | "vehicle" | null>(null)
  const [current_time, set_current_time] = useState<number>(0)
  const [duration, set_duration] = useState<number>(0)
  const [player_status, set_player_status] = useState<p_status>("unstarted")
  const [play_video, set_play_video] = useState<boolean>(false)
  const [sequence_preview_enabled, set_sequence_preview_enabled] = useState<boolean>(false)

  const close_current_details = ()=>{
    set_current_details(null)
  }

  const get_duration = (dur: number) =>{
    set_duration(dur)
  }

  const get_current_time = (cur: number) =>{
    set_current_time(cur)
  }

  const get_player_status  = (ps: p_status) =>{
    set_player_status(ps)
  }

  const close_sequence_preview = () =>{
    set_sequence_preview_enabled(false)
  }

  useEffect(()=>{
    console.log(player_status)
  }, [,player_status])



  return (
    <CurrentDetailsContext.Provider value={{current_details, set_current_details}} >
      <VideoDetailsContext.Provider value={{
        duration,
        get_duration,
        current_time,
        get_current_time,
        player_status,
        get_player_status
      }} >
      <Flex {...FlexColCenterStart} width="100vw" height="100vh" position="relative" >

        <Player is_active={play_video} />

      <Grid fontFamily={"MandatoryPlaything"} overflowY="hidden" overflowX="hidden" color="white" fontSize="24px" {...FlexColCenterBetween} position="absolute" top="0px" left="0px" templateRows="60px auto 60px" display="flex"  width="100vw" height={"100vh"} bg="transparent" backgroundSize={"cover"} backgroundRepeat="no-repeat" >
        {(player_status == "unstarted" || player_status == "ended" || player_status == "paused"  ) &&<GridItem display="flex" width="100%" height="60px" {...FlexColCenterCenter} bg="rgba(0, 0, 0, 0.69)" backdropFilter={"auto"} backdropBlur="4px" >
            <DirectionButton icon_type='up' >
              Previous
            </DirectionButton>
        </GridItem>}
        <GridItem rowSpan={1}  columnGap={"0px"} width="100vw" height="100%" >
          <Grid width="100%" height="100%" templateColumns={"20% 60% 20%"} columnGap="0px"    >
            <GridItem display={"flex"}  {...FlexColStartCenter} padding="40px 20px" height="100%" colSpan={1} >
                <Grid templateRows={"60px auto"} rowGap="20px" >
                  { !sequence_preview_enabled && <GridItem rowSpan={1} >
                      <BaseNodgeButton click_event={()=>{
                      set_sequence_preview_enabled(true)
                    }} icon={<Image src="/icons/launch_stage_icon.svg" width="60px" height="52px"  />} >
                      Timeline
                    </BaseNodgeButton>
                  </GridItem>}
                  {!sequence_preview_enabled && <GridItem>
                      <SequenceDropdown/>
                  </GridItem>}
                </Grid>                
                {sequence_preview_enabled && <SequenceCircle click_event={close_sequence_preview} timeline_duration={3} events={[
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
                ]} />}
            </GridItem>
            <GridItem display={"flex"}  {...FlexColCenterCenter} colSpan={1} >
                {!play_video && <DirectionButton click_event={()=>{
                  set_play_video(true)
                }} icon_type='right' >
                    Play
                </DirectionButton>}
            </GridItem>
            <GridItem padding="10px 10px" colSpan={1} >
                <Flex {...FlexColStartStart} height="100%" width="100%"  >
                  <DropDownMenu1/>
                </Flex>
            </GridItem>
          </Grid>
        
        </GridItem>
        {(player_status == "unstarted" || player_status == "ended" || player_status == "paused"  ) &&<GridItem display="flex" width="100%" height="60px" {...FlexColCenterCenter} bg="rgba(0, 0, 0, 0.69)" backdropFilter={"auto"} backdropBlur="4px" >
            <DirectionButton icon_type='down' direction='down'  >
              Upcoming
            </DirectionButton>
        </GridItem>}
        { current_details && <Flex {...FlexColStartStart} zIndex={10} padding="28px 28px" position="absolute" right="0px" top="0px" bg="rgba(0, 0, 0, 0.4)" backdropFilter={"auto"} backdropBlur="24px"  width="80vw" height="100vh" >
              <chakra.h2  paddingBottom={"4px"} borderBottom="2px solid white" marginBottom="24px" >
                {current_details}
              </chakra.h2>
              <Grid templateRows={"repeat(4, 1fr)"} rowGap="24px" width="100%"  >
                {
                  current_details == "crew" ? (<>
                      <Details header="crew" content={[
                        {
                          name: "Raja Chari",
                          org: "NASA",
                          img: "/DevAssets/astronaunts/raja_chari_nasa.png"
                        },
                        {
                          img: "/DevAssets/astronaunts/tom_mashburn_nasa.png",
                          org: "NASA",
                          name: "Tom Mashburn"
                        },
                        {
                          name: "Kayla Barron",
                          org: "NASA",
                          img: "/DevAssets/astronaunts/kayla_barron_nasa.png"
                        },
                        {
                          name: "Mathias Maurer",
                          org: "ESA",
                          img: "/DevAssets/astronaunts/mathias_maurer_esa.png"
                        }
                      ]} />
                  </>): current_details == "vehicle" ? (
                    <Vehicle/>
                  ) : current_details == "destination" ? (
                    <Destination/>
                  )  : current_details == "mission" ? ( <Mission/> ) : (<>
                  </>)
                }
              </Grid>
              <IconButton onClick={close_current_details}  position="absolute" top="28px" right={"28px"} aria-label="close_button" bg="none" _hover={{background: "none"}} _active={{background: "none"}}  >
                <Image src="/icons/CloseIcon.svg" width="36px" height="28px"  />
              </IconButton>
        </Flex>}
      </Grid>



      </Flex>
      </VideoDetailsContext.Provider>
    </CurrentDetailsContext.Provider>
  )
}

export default Home
