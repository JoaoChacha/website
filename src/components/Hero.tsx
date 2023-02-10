import Button from './Button'
import styled from '@mui/system/styled'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { FC } from 'react'
import { title, subtitle, paragraph } from '../constants/hero'
import Image from 'next/image'
import me from '../../public/me.png'
import Grid from '@mui/material/Unstable_Grid2'
import Section from './Section'

const Ctas = styled('div')({
  alignSelf: 'flex-end',
  marginTop: '2rem',
  display: 'flex',
  gap: '1rem',
})

const Hero: FC = () => (
  <Section>
    <Grid container alignItems={'center'} justifyContent='center' spacing={5}>
      <Grid xs={12} sm={6}>
        <Typography variant='h2'>{title}</Typography>
        <Typography variant='subtitle1' component={'h3'} marginBottom={'2rem'}>
          {subtitle}
        </Typography>
        <Typography variant='body1'>{paragraph}</Typography>
        <Ctas>
          <Button variant='contained' href='#hireme'>
            Hire me!
          </Button>
          <Button
            variant='contained'
            color='inherit'
            disableRipple
            href='#hireme'
          >
            Learn more!
          </Button>
        </Ctas>
      </Grid>
      <Grid xs={10} sm={6} display='flex' justifyContent={'center'}>
        <Avatar sx={{ width: '20rem', height: '20rem' }}>
          <Image src={me} fill alt='me' />
        </Avatar>
      </Grid>
    </Grid>
  </Section>
)

export default Hero
