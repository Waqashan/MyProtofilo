import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const FooterSec1 = () => {
  return (
    <footer
      style={{ backgroundColor: "black", color: "white", padding: "20px 10px" }}
    >
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">About Me</Typography>
          <Typography variant="body2" color="white">
            Hi, I'm Waqas Ahmad. I'm a passionate web developer.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">Links</Typography>
          <Typography variant="body2" color="textSecondary">
            <Link style={{ color: "white",textDecoration:"none"  }} to="/about">
              About
            </Link>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <Link style={{ color: "white" ,textDecoration:"none" }} to="/">
              Portfolio
            </Link>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <Link style={{ color: "white",textDecoration:"none"  }} to="/contact">
              Contact
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">Contact Me</Typography>
          <Typography variant="body2" color="white">
            Email: waqaskhan26394@gmail.com
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
            <a
              style={{ color: "white",textDecoration:"none"  }}
              href="https://github.com/Waqashan"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <a
              style={{ color: "white" ,textDecoration:"none" }}
              href="https://linkedin.com/in/example"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <a
              style={{ color: "white",textDecoration:"none" }}
              href="https://twitter.com/example"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default FooterSec1;
