import styled from '@mui/system/styled'
import useMediaQuery from '@mui/material/useMediaQuery'
import MUILink from '@mui/material/Link'
import useTheme from '@mui/system/useTheme'
import Link from 'next/link'
import { FC } from 'react'
import { menu } from 'src/constants/menu'

export const MenuList = styled('ul')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    listStyle: 'none',
    display: 'flex',
  },
}))

export const Separator = styled('span')<{ active?: boolean }>(
  ({ theme, active }) => ({
    color: '#C5C5C5',
    ...(active && {
      color: theme.palette.primary.dark,
      position: 'absolute',
      right: '-0.7rem',
    }),
    [theme.breakpoints.up('md')]: {
      ...(active
        ? {
            right: '50%',
            bottom: '-1.5rem',
          }
        : {
            marginLeft: '2rem',
            marginRight: '2rem',
          }),
    },
  }),
)

export const MenuItem = styled('li')(({ theme }) => ({
  textTransform: 'uppercase',
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column',
  marginBottom: '0.5rem',
  '> *:first-of-type': {
    position: 'relative',
  },
  [theme.breakpoints.up('md')]: {
    marginBottom: '0',
    flexDirection: 'row',
  },
}))

const HeaderMenu: FC = () => {
  const theme = useTheme()
  const isPhone = useMediaQuery(theme.breakpoints.down('md'))
  let activeMenu = 1

  return (
    <MenuList>
      {menu.map(({ label, url }, i) => (
        <MenuItem key={`${url}`}>
          <MUILink component={Link} href={url} color='inherit' underline='none'>
            {label}
            {i === activeMenu && <Separator active>•</Separator>}
          </MUILink>
          {menu.length - 1 !== i && !isPhone && <Separator>•</Separator>}
        </MenuItem>
      ))}
    </MenuList>
  )
}

export default HeaderMenu
