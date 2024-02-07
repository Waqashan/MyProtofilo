import { Box, Container, Typography, TextField, Button, Grid } from '@mui/material';

const ContactSec1 = () => {
  return (
    <Box height={"73vh"} mt={13}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ mt: 4, mb: 2 }}>
          Contact Us
        </Typography>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <Box sx={{ width: '100%' }}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ContactSec1;
