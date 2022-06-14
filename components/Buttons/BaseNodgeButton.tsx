import { Grid, chakra, GridItem } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { FlexRowCenterCenter } from '../../utils/FlexConfigs'

function BaseNodgeButton({children, click_event, icon, direction, nodge_type }:{children?: string | ReactNode | ReactNode[]; click_event?: ()=>void  ; icon?: ReactNode; direction?: "up" | "down", nodge_type?: "left" | "right" }) {

  return (
    <chakra.a textDecoration="none" onClick={click_event} cursor={"pointer"} >
         {(typeof nodge_type == "undefined" || (typeof nodge_type !== "undefined" && nodge_type == "right") ) &&<Grid templateColumns={"75% 25%"} columnGap={"0px"} width="200px" height="40px"  >
            <GridItem colSpan={1} bg="transparent" border="2px solid white" display={"Flex"} {...FlexRowCenterCenter} >
                <chakra.p fontFamily={"MandatoryPlaything"} color="white" fontSize="18px"  >
                    {children}
                </chakra.p>
            </GridItem>
            <GridItem bg="white"  display={"flex"} {...FlexRowCenterCenter} colSpan={1} height="100%"  clipPath={typeof direction !== "undefined" ? "polygon(0% 100%, 75% 100%, 100% 75%, 100% 0%, 0% 0%)" : "polygon(0% 0%, 75% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 0%)"} >
                {icon}
            </GridItem>
        </Grid>}
        {
          (typeof nodge_type !== "undefined" && nodge_type == "left" ) &&<Grid templateColumns={"25% 75%"} columnGap={"0px"} width="200px" height="40px"  >
                <GridItem bg="white"  display={"flex"} {...FlexRowCenterCenter} colSpan={1} height="100%"  clipPath={typeof direction == "undefined" ? "polygon(25% 0%, 0% 25%, 0% 100%, 100% 100%, 100% 0%, 25% 0% )" : "polygon(25% 100%, 0% 75%, 0% 0%, 100% 0%, 100% 100%, 25% 100%)"} >
                  {icon}
                </GridItem>
                <GridItem colSpan={1} bg="transparent" border="2px solid white" display={"Flex"} {...FlexRowCenterCenter} >
                    <chakra.p fontFamily={"MandatoryPlaything"} color="white" fontSize="18px"  >
                        {children}
                    </chakra.p>
                </GridItem>
          </Grid>
        }
    </chakra.a>
   
  )
}

export default BaseNodgeButton