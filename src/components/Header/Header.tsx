import useTheme from '@mui/system/useTheme'
import Collapse from '@mui/material/Collapse'
import ButtonBase from '@mui/material/ButtonBase'
import MUILink from '@mui/material/Link'
import useMediaQuery from '@mui/material/useMediaQuery'
import { FC, useState } from 'react'
import Link from 'next/link'
import Logo from '../Logo'
import Button from '../Button'
import { Nav, Header as HeaderStyled } from './Header.styles'
import HeaderMenu from '../HeaderMenu/HeaderMenu'
import BurgerToggle from '../BurgerToggle'

const Header: FC = () => {
  const theme = useTheme()
  const isPC = useMediaQuery(theme.breakpoints.up('md'))
  const [open, setOpen] = useState(false)

  return (
    // @ts-ignore
    <HeaderStyled component={'header'} maxWidth={false}>
      <Nav>
        <MUILink component={Link} href='/' underline='none'>
          <Logo />
        </MUILink>
        {!isPC ? (
          <ButtonBase
            role={'button'}
            disableRipple
            aria-label='menu button'
            onClick={() => setOpen(!open)}
          >
            <BurgerToggle open={open} />
          </ButtonBase>
        ) : (
          <>
            <HeaderMenu />
            <Button
              variant='contained'
              disableFocusRipple
              disableRipple
              disableElevation
              disableTouchRipple
              href='#hireme'
            >
              Hire me!
            </Button>
          </>
        )}
      </Nav>

      {!isPC && (
        <Collapse in={open && !isPC}>
          <HeaderMenu />
        </Collapse>
      )}
    </HeaderStyled>
  )
}
export default Header
