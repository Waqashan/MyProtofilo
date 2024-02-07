


import { Grid, Typography, Link } from '@mui/material';

const FooterSec1 = () => {
  return (
    <footer style={{ backgroundColor: 'black',color:"white", padding: '20px 10px' }}>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">About Me</Typography>
          <Typography variant="body2" color="white">
            Hi, I'm [Waqas Ahmad]. I'm a passionate web developer.
      
           
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">Links</Typography>
          <Typography variant="body2" color="textSecondary">
            <Link  sx={{color:"white"}} href="#about">About</Link>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <Link  sx={{color:"white"}} href="#portfolio">Portfolio</Link>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <Link  sx={{color:"white"}} href="#contact">Contact</Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">Contact Me</Typography>
          <Typography variant="body2" color="white">
            Email: example@example.com
          </Typography>
          <Typography variant="body2" color="white">
            Phone: +923179971588
          </Typography>
          <Typography variant="body2" color="white">
            whatsapp: +923409495625
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">Social Media</Typography>
          <Typography variant="body2" color="textSecondary">
            <Link  sx={{color:"white"}} href="https://github.com/example">GitHub</Link>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <Link  sx={{color:"white"}} href="https://linkedin.com/in/example">LinkedIn</Link>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <Link  sx={{color:"white"}} href="https://twitter.com/example">Twitter</Link>
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default FooterSec1;
