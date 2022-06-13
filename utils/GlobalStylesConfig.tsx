import { Global } from '@emotion/react'
import React from 'react'

function GlobalStylesConfig() {
  return (
    <Global styles={`
        *{
            box-sizing: border-box;
        }
        html, body{
            overflow-x:hidden;
        }
        @font-face{
          font-family: MandatoryPlaything;
          src: url('/Fonts/MandatoryPlaything.ttf') format('truetype') ;
          font-style: normal;
        }
    `} />
  )
}

export default GlobalStylesConfig