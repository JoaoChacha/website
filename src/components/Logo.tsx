import styled from '@mui/system/styled'

const Wrapper = styled('div')(() => ({
  border: '1px dotted black',
  minWidth: '4rem',
  minHeight: '4rem',
  borderRadius: '4rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const NameSpan = styled('span')(() => ({
  fontSize: '0.6em',
  color: 'black',
}))

const Logo = () => (
  <Wrapper>
    <NameSpan>CHACHA</NameSpan>
  </Wrapper>
)

export default Logo
