import styled from '@mui/system/styled'
import Container from '@mui/material/Container'

const Section = styled(Container)({})

Section.defaultProps = {
  // @ts-ignore
  component: 'section',
  sx: { marginY: '10rem' },
}

export default Section
