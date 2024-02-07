import { Typography, Grid, Box } from "@mui/material";
import OurMission from "../OurMission/OurMission";

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
              overflow: "hidden", // Ensures the image does not overflow its container
            }}
          >
            <img
              alt="Team"
              src="/assets/images/waqas2.jpg"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // Ensures the image covers the container while maintaining aspect ratio
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3">Hello!</Typography>
          <Typography variant="h3">Iam Waqas Ahmad!</Typography>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
            justo sit amet metus fringilla blandit. Integer id ex eget est
            mollis semper non nec lacus. Proin posuere lacus id turpis finibus
            rhoncus. Curabitur at convallis dui. Sed varius aliquet magna eu
            suscipit. Nulla ultricies ante vitae urna pharetra ultrices.
          </Typography>
          <Typography variant="body1">
            Fusce rutrum nisi ut dolor efficitur, ut aliquet purus tincidunt.
            Phasellus eget lectus quis velit ullamcorper ullamcorper vel at
            lacus. Phasellus volutpat orci at magna pharetra facilisis.
            Suspendisse lacinia felis in magna mattis, ut laoreet ligula
            suscipit.
          </Typography>
          <Typography variant="body1">
            Developer: John Doe
            <br />
            Father's Name: Mr. Doe
            <br />
            College: ABC College
            <br />
            University: XYZ University
            <br />
            Phone: +1234567890
          </Typography>
        </Grid>
      </Grid>

      <Box mt={6}>
        <Typography variant="h4" textAlign={"center"} gutterBottom>
          Mission
        </Typography>
        <OurMission />
      </Box>
    </Box>
  );
};

export default AboutUs;
