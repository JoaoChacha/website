import styled from '@emotion/styled'
import Container from '@mui/material/Container'

export const Header = styled(Container)({
  position: 'sticky',
  zIndex: 1,
  top: '0',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  backgroundColor: 'white',
})

export const Nav = styled('nav')({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})
