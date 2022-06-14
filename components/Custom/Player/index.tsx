import { Flex } from '@chakra-ui/react'
import Image from 'next/image'
import React, { useContext, useEffect, useRef, useState } from 'react'
import YouTube, { YouTubePlayer, YouTubeProps } from 'react-youtube'
import { VideoDetailsContext } from '../../../pages'
import { FlexColCenterCenter, FlexRowCenterAround } from '../../../utils/FlexConfigs'
import IconNodgeButton from '../../Buttons/IconNodgeButton'

export type p_status = "ended" | "playing" | "buffering" | "cued" | "paused" | "unstarted"


function Player() {
    const [c_time, set_c_time] = useState<number>(0)
    const {get_duration, get_current_time, get_player_status} = useContext(VideoDetailsContext)
    const intervalTimerRef = useRef<any>(null)
    const [player, setPlayer] = useState<YouTubePlayer| null>(null)
    const [player_status, set_player_status] = useState<p_status>("unstarted")
    

    const resetInterval = () =>{
        if(intervalTimerRef){
            if(typeof intervalTimerRef !== "undefined"){
                clearInterval(intervalTimerRef.current)
            }
        }
    }

    const pause = () =>{
        player.pauseVideo()
    }



    useEffect(()=>{
        resetInterval()
        intervalTimerRef.current = setInterval(()=>{
            if(player){
                set_c_time(player.getCurrentTime())
                if(typeof get_current_time !== "undefined"){
                    console.log(player.getCurrentTime())
                    get_current_time(player.getCurrentTime())
                }
            }
        }, 1000)
    }, [,c_time])

    

    const onPlayerReady: YouTubeProps['onReady'] = (event) =>{
        var dur = event.target.getDuration()
        if(typeof get_duration !== "undefined"){
            get_duration(typeof dur == "number" ? dur : 0)
            console.log(dur)
        }
        event.target.playVideo()
        setPlayer(event.target)

    }

    const s_status = (st: p_status) =>{
        if(typeof get_player_status !== "undefined"){
            get_player_status(st)
        }
    }

    const onStateChange: YouTubeProps['onStateChange'] = (event) =>{

        
        
        switch(event.data){
            case -1:
                set_player_status("unstarted")
                s_status("unstarted")
                case 0:
                set_player_status("ended")
                s_status("ended")
                case 1:
                    set_player_status("playing")
                    s_status("playing")
                case 2:
                        set_player_status("paused")
                        s_status("paused")
                case 3:
                            set_player_status("buffering")
                            s_status("buffering")
                default:
                                set_player_status("cued")
                                s_status("cued")

        console.log(event.data)
        setPlayer(event.target)

        }
    }

    const toggle_mute = () =>{
        if(player){
            if(player.isMuted()){
                player.unMute()
            }else{
                player.mute()
            }
        }
    }


  return (
    <Flex width="100vw" height="100vh"  bg="black" position="relative"  {...FlexColCenterCenter} >
            <YouTube 
                videoId='bG6AwvGPd-E'
                opts={{
                    playerVars: {
                        autoplay: 0,
                        controls: 0
                    },
                    width: "1365",
                    height: "600"
                }}
                onReady={onPlayerReady}
                onStateChange={onStateChange}
            />
        {player && <Flex width="200px" zIndex={5} height="40px" {...FlexRowCenterAround} right="20%" bottom="20%" position="absolute" >
                <IconNodgeButton click_event={pause} >
                    {player_status == "paused" && <Image src="/icons/play.svg" width="36px" height="28px" />}
                    {player_status !== "paused" && <Image src="/icons/pause.svg" width="36px" height="28px" />}
                </IconNodgeButton>

                <IconNodgeButton click_event={toggle_mute} >
                    {(player && !player.isMuted()  )&& <Image src="/icons/SoundIcon.svg" width="36px" height="36px" />}
                    {(player && player.isMuted())  && <Image src="/icons/Mute.svg" width="36px" height="36px" />}
                </IconNodgeButton>
        </Flex>}
    </Flex>
  )
}

export default Player