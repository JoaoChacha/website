import styled from '@mui/system/styled'
import { FC } from 'react'

interface BurgerToggleProps {
  open: boolean
}

const Line = styled('line')<BurgerToggleProps>(({ open }) => ({
  fill: 'rgb(216, 216, 216)',
  stroke: 'rgb(0, 0, 0)',
  transitionProperty: 'transform',
  transitionDuration: '0.3s',
  transformOrigin: 'center',
  ...(open && {
    '&:first-of-type, &:last-of-type': {
      transform: 'scale(0,1)',
    },
    '&:nth-of-type(2)': {
      transform: 'rotate(45deg)',
    },
    '&:nth-of-type(3)': {
      transform: 'rotate(-45deg)',
    },
  }),
}))

const BurgerToggle: FC<BurgerToggleProps> = ({ open }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 40 40'
      width='20'
      height='20'
    >
      <Line x1='1' y1='2' x2='40' y2='2' open={open} />
      <Line x1='1' y1='20' x2='40' y2='20' open={open} />
      <Line x1='1' y1='20' x2='40' y2='20' open={open} />
      <Line x1='15' y1='38' x2='40' y2='38' open={open} />
    </svg>
  )
}

export default BurgerToggle
