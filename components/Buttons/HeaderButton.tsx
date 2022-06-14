import React, { ReactNode } from 'react'
import BaseNodgeButton from './BaseNodgeButton'

function HeaderButton({children, text}: {children: ReactNode, text: string, }) {
  return (
    <BaseNodgeButton nodge_type='left' direction = "down" icon={children}  >
        {text}
    </BaseNodgeButton>
  )
}

export default HeaderButton