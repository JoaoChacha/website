import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import Section from '../Section'

const ContactMe = () => {
  return (
    <Section>
      <Grid container>
        <Grid md={6}>
          <Typography variant='h2' mb={7}>
            Contact Me
          </Typography>
          <Typography variant='body1'>
            Hello! I am a front-end developer with a passion for creating
            beautiful and functional websites. Whether you&apos;re looking for a
            freelancer for your next project or a full-time developer for your
            company, I am open to new roles and new opportunities.
          </Typography>
          <Typography variant='body1' mt={2}>
            If you have any questions or would like to discuss a potential
            project, please don&apos;t hesitate to reach out to me.
          </Typography>

          <Typography variant='body1' mt={3}>
            I look forward to hearing from you and learning more about how I can
            help bring your ideas to life!
          </Typography>
        </Grid>
        <Grid md={6}></Grid>
      </Grid>
    </Section>
  )
}

export default ContactMe
