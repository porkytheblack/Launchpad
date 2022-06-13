import { Flex, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { FlexColCenterCenter, FlexColCenterStart } from '../utils/FlexConfigs'

const Home: NextPage = () => {
  return (
    <Flex {...FlexColCenterStart}  width="100vw" height={"100vh"} backgroundImage="/DevAssets/Homepage_Desktop 3.png" backgroundSize={"cover"} backgroundRepeat="no-repeat" >
      dd
    </Flex>
  )
}

export default Home
