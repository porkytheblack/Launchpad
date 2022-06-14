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
        ::-webkit-scrollbar {
          width: 5px;
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          border-radius: 2.5px;
          background: rgba(0, 0, 0, 0.69);
        }
    `} />
  )
}

export default GlobalStylesConfig