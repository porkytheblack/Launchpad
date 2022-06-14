import { Flex, chakra, IconButton, Grid, GridItem, } from '@chakra-ui/react'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { CurrentDetailsContext } from '../../../pages'
import { FlexColEndStart, FlexColStartStart } from '../../../utils/FlexConfigs'



function DropDownMenu1() {
    const {current_details, set_current_details} = useContext(CurrentDetailsContext)
    const [isDropped, set_isDropped] = useState<boolean>(false)



    const toggle = () =>{
        set_isDropped(!isDropped)
    }
  return (
    <Flex {...FlexColEndStart} width="100%" height="100%" >
      
        {isDropped && <IconButton onClick={toggle} bg="none" marginBottom={"20px"} _hover={{background: "none"}}   _active={{background: "none"}}  aria-label='close_icon' >
            <Image src="/icons/CloseIcon.svg" width="36px" height="28px" />
        </IconButton>}
       {!isDropped &&  <IconButton onClick={toggle} bg="none" marginBottom={"20px"} _hover={{background: "none"}}   _active={{background: "none"}}  aria-label='hamburger_icon' >
            <Image src="/icons/HamburgerIcon.svg" width="36px" height="28px" />
        </IconButton>}
        {isDropped && <Grid width="100%" templateRows={"repeat(5, 1fr)"} rowGap="20px" paddingRight={"20px"} borderRight={"2px solid white"} >
            {(["crew", "vehicle", "destination", "mission"] as any[] ).map((val, key)=>(
                <chakra.a onClick={()=>{
                    if(typeof set_current_details !== "undefined"){
                        set_current_details(val)
                    }
                }} textDecor={"none"} cursor="pointer"  >

                    <GridItem cursor="pointer" width="100%" color="white" key={key}    height="40px" borderBottom="2px solid white" >
                        <chakra.h4 fontFamily={"MandatoryPlaything"} fontSize="20px" fontWeight={"500"} >
                            {val}
                        </chakra.h4>
                    </GridItem>

                </chakra.a>
                    
            ))}
            
        </Grid>}
    </Flex>
  )
}

export default DropDownMenu1