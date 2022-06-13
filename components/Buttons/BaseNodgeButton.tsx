import { Grid, chakra, GridItem } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { FlexRowCenterCenter } from '../../utils/FlexConfigs'

function BaseNodgeButton({children, click_event, icon, direction }:{children?: string | ReactNode | ReactNode[]; click_event?: ()=>void  ; icon?: ReactNode; direction?: "up" | "down" }) {

  return (
    <chakra.a textDecoration="none" onClick={click_event} cursor={"pointer"} >
         <Grid templateColumns="75% 25%" columnGap={"0px"} width="200px" height="40px"  >
        <GridItem colSpan={1} bg="transparent" border="2px solid white" display={"Flex"} {...FlexRowCenterCenter} >
            <chakra.p fontFamily={"MandatoryPlaything"} color="white" fontSize="18px"  >
                {children}
            </chakra.p>
        </GridItem>
        <GridItem bg="white"  display={"flex"} {...FlexRowCenterCenter} colSpan={1} height="100%"  clipPath={typeof direction !== "undefined" ? "polygon(0% 100%, 75% 100%, 100% 75%, 100% 0%, 0% 0%)" : "polygon(0% 0%, 75% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 0%)"} >
            {icon}
        </GridItem>
    </Grid>
    </chakra.a>
   
  )
}

export default BaseNodgeButton