import { Typography, Grid, Box } from "@mui/material";
import MyProjects from "../OurMission/OurMission";

const AboutUs = () => {
  return (
    <Box
      py={6}
      px={1}
      sx={{ width: { xs: "100", sm: "83%" }, margin: "40px auto 0 auto" }}
    >
      <Typography mt={4} variant="h3" align="center" gutterBottom>
        About Me
      </Typography>
      <Grid container mt={7}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              maxWidth: "600px",
              maxHeight: "600px",
              margin: "0 auto 20px",
              overflow: "hidden",
            }}
          >
            <img
              alt="Team"
              src="/assets/images/waqas2.jpg"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} px={2}>
          <Typography variant="h3">Hello!</Typography>
          <Typography variant="h3">Iam Waqas Ahmad!</Typography>
          <Typography variant="body1" gutterBottom>
            I am a dedicated and talented MERN Stack developer, driven by a
            passion for coding and a desire to create impactful web solutions.
            With a wealth of experience and a deep understanding of the latest
            technologies and best practices, I am confident in my ability to
            deliver high-quality web applications that meet the needs of
            businesses and users alike.I am always looking for new challenges
            and opportunities to grow as a developer. My expertise in MongoDB,
            Express, React, and Node.js allows me to develop a wide range of web
            applications, from simple landing pages to complex e-commerce
            platforms.
          </Typography>
          <Typography variant="body1">
            I bring a creative and practical approach to every project,
            leveraging the latest technologies and tools to deliver the best
            possible outcome. I am a strong communicator and collaborator, and I
            believe that great web development is a team sport.
          </Typography>
          {/* <Typography variant="body1">
            Developer: John Doe
            <br />
            Father's Name: Mr. Doe
            <br />
            College: ABC College
            <br />
            University: XYZ University
            <br />
            Phone: +1234567890
          </Typography> */}
        </Grid>
      </Grid>

      <Box mt={6}>
        <MyProjects />
      </Box>
    </Box>
  );
};

export default AboutUs;
