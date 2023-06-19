import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { FooterNavigation, FooterSocialLinks } from '@/components/footer'

import IconButton from '@mui/material/IconButton'

import EmailIcon from '@mui/icons-material/Email'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import { motion } from 'framer-motion'

const Footer: FC = () => {
  const socialLinksVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
  }
  return (
    <Box bgcolor="#f8f8f8" py={6}>
      <Container>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={5}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={socialLinksVariants}
              style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}
            >
              <IconButton color="primary" href="mailto:emmanuelzzz123@gmail.com">
                <EmailIcon />
              </IconButton>
              <IconButton color="primary" href="https://twitter.com/yourtwitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="primary" href="https://www.instagram.com/yourinstagram">
                <InstagramIcon />
              </IconButton>
            </motion.div>
            <Box textAlign="center">
              <Typography component="h2" variant="h2" sx={{ color: '#333', mb: 2 }}>
                Thanks for Watching!!
              </Typography>
              <Typography variant="subtitle1" sx={{ color: '#666', letterSpacing: 1, mb: 2 }}>
                I hope you have enjoyed your stay. If you have any questions or comments, feel free to reach out to me
                via email: <b>emmanuelzzz123@gmail.com</b>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
