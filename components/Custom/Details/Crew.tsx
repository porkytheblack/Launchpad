import { Grid } from '@chakra-ui/react'
import React from 'react'
import CrewMemberDetails from '../../Cards/CrewMemberDetails'

function Crew({crew}: {crew: {
    name: string;
    org: string;
    link: string;
    img: string
}[]}) {
  return (
    <Grid templateRows={`repeat( ${crew.length} , 1fr)`} rowGap="24px" width="100%"  >
        {
            crew.map(({name, org, link, img}, key)=>(
                <CrewMemberDetails key={key} name={name} org={org} img={img} />
            ))
        }
        
    </Grid>
  )
}

export default Crew