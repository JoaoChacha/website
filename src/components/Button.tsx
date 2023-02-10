import MUIButton from '@mui/material/Button'
import styled from '@mui/system/styled'

const Button = styled(MUIButton)(() => ({
  borderRadius: '3rem',
  '&focus': {
    border: '3px solid black',
  },
}))

Button.defaultProps = {
  disableRipple: true,
  disableElevation: true,
  disableTouchRipple: true,
}

export default Button
