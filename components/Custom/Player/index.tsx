import { Flex } from '@chakra-ui/react'
import Image from 'next/image'
import React, { useContext, useEffect, useRef, useState } from 'react'
import YouTube, { YouTubePlayer, YouTubeProps } from 'react-youtube'
import { VideoDetailsContext } from '../../../pages'
import { FlexColCenterCenter, FlexRowCenterAround } from '../../../utils/FlexConfigs'
import IconNodgeButton from '../../Buttons/IconNodgeButton'

export type p_status = "ended" | "playing" | "buffering" | "cued" | "paused" | "unstarted"


function Player({is_active}: {is_active?: boolean}) {
    const [c_time, set_c_time] = useState<number>(0)
    const {get_duration, get_current_time, get_player_status} = useContext(VideoDetailsContext)
    const intervalTimerRef = useRef<any>(null)
    const [player, setPlayer] = useState<YouTubePlayer| null>(null)
    const [muted, set_is_muted] = useState<boolean>(false)
    const [player_status, set_player_status] = useState<p_status>("unstarted")
    

    const resetInterval = () =>{
        if(intervalTimerRef){
            if(typeof intervalTimerRef !== "undefined"){
                clearInterval(intervalTimerRef.current)
            }
        }
    }

   

    const toggle_play_pause = ( ) =>{
        if(player_status === "playing"){
            player.pauseVideo()
            set_player_status("paused")
        }else{
            player.playVideo()
            set_player_status("playing")
        }
    }



    useEffect(()=>{
        resetInterval()
        intervalTimerRef.current = setInterval(()=>{
            if(player){
                set_c_time(player.getCurrentTime())
                if(typeof get_current_time !== "undefined"){

                    get_current_time(player.getCurrentTime())
                }
            }
        }, 1000)
        return ()=>{
            resetInterval()
        }

    }, [,c_time])


    useEffect(()=>{
        if(player){
            if(is_active){
                player.playVideo()
                set_player_status("playing")
            }else{
                player.pauseVideo()
                set_player_status("paused")
            }
        }
        
    }, [, is_active])

    

    const onPlayerReady: YouTubeProps['onReady'] = (event) =>{
        var dur = event.target.getDuration()
        if(typeof get_duration !== "undefined"){
            get_duration(typeof dur == "number" ? dur : 0)
            console.log(dur)
        }
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
                break;
            case 0:
                set_player_status("ended")
                s_status("ended")
                break;
            case 1:
                set_player_status("playing")
                s_status("playing")
                break;
            case 2:
                set_player_status("paused")
                s_status("paused")
                break;
            case 3:
                set_player_status("buffering")
                s_status("buffering")
                break;
            default:
                set_player_status("cued")
                s_status("cued")
                break;
        }

        console.log(event.data+" => "+ player_status)
        console.log(player_status)
        setPlayer(event.target)
    }

    const toggle_mute = () =>{
        if(player){
            if(player.isMuted()){
                player.unMute()
                set_is_muted(false)
            }else{
                player.mute()
                set_is_muted(true)
            }
        }
    }


  return (
    <Flex width="100vw" height="100vh"  bg="black" position="relative"  {...FlexColCenterCenter} >
            <YouTube 
                videoId='bG6AwvGPd-E'
                opts={{
                    playerVars: {
                        controls: 0,
                        rel: 0
                    },
                    width: "1365",
                    height: "600"
                }}
                onReady={onPlayerReady}
                onStateChange={onStateChange}
            />
        {player && <Flex width="200px" zIndex={5} height="40px" {...FlexRowCenterAround} right="20%" bottom="20%" position="absolute" >
                <IconNodgeButton click_event={toggle_play_pause} >
                    {player_status == "paused" && <Image src="/icons/play.svg" width="36px" height="28px" />}
                    {player_status == "playing" && <Image src="/icons/pause.svg" width="36px" height="28px" />}
                </IconNodgeButton>

                <IconNodgeButton click_event={toggle_mute} >
                    { !muted && <Image src="/icons/SoundIcon.svg" width="36px" height="36px" />}
                    {muted  && <Image src="/icons/Mute.svg" width="36px" height="36px" />}
                </IconNodgeButton>
        </Flex>}
    </Flex>
  )
}

export default Player