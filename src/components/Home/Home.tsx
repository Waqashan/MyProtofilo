import { Container, Typography, Button, Grid } from "@mui/material";
import Box from "@mui/material/Box"; // Import Box from @mui/material

const Home = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #f0f2f5, #fff)",
        padding: "50px 0",
        marginTop: { xs:"30px",sm: "0" },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom align="center">
              Welcome to My Portfolio
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              I am a MERN stack developer passionate about creating responsive
              web applications.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Explore my projects, skills, and experience to learn more about
              what I can offer.
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button variant="contained" color="primary" href="#projects">
                  View Projects
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary" href="#contact">
                  Contact Me
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src="/assets/images/waqas.png"
              alt="Developer"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
