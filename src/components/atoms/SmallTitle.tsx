import { ReactNode } from 'react'
import TextLabel from './TextLabel'

type TSmallTitleProps = {
  children: ReactNode
}

const SmallTitle = ({ children }: TSmallTitleProps) => {
  return (
    <TextLabel size="sm" weight="medium" color="n40" style={{ textTransform: 'uppercase' }}>
      {children}
    </TextLabel>
  )
}

export default SmallTitle
