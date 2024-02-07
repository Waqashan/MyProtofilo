import { Box, Typography, Card, CardContent, Grid } from "@mui/material";

const SkillsSec1 = () => {
  const technicalSkills = [
    { name: "HTML5", image: "/assets/images/html5.jpg" },
    { name: "CSS3", image: "/assets/images/css3.jpeg" },
    { name: "JavaScript (ES6+)", image: "/assets/images/ES6.jpg" },

    { name: "React.js", image: "/assets/images/react.png" },
    { name: "Node.js", image: "/assets/images/node.png" },
    { name: "Express.js", image: "/assets/images/ex.png" },
    { name: "MongoDB", image: "/assets/images/mong.png" },
    { name: "Material-UI", image: "/assets/images/mui.png" },
    { name: "Git & GitHub", image: "/assets/images/git.jpg" },
    { name: "RESTful APIs", image: "/assets/images/rest.png" },
  ];

  const softSkills = [
    { name: "Communication", image: "/assets/images/cv.png" },
    { name: "Problem-solving", image: "/assets/images/cv.png" },
    { name: "Teamwork", image: "/assets/images/cv.png" },
    { name: "Time management", image: "/assets/images/cv.png" },
    { name: "Adaptability", image: "/assets/images/cv.png" },
    { name: "Creativity", image: "/assets/images/cv.png" },
  ];

  const renderSkills = (skills: any) => {
    return (
      <Box sx={{ padding: "10px" }}>
        <Grid container spacing={2}>
          {skills.map((skill: any) => (
            <Grid key={skill.name} item xs={12} sm={6} md={4} lg={3}>
              <Card variant="outlined">
                <img
                  width={"100%"}
                  height="140"
                  src={`${skill.image}`}
                  alt={skill.name}
                />
                <CardContent>
                  <Typography variant="body1">{skill.name}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };

  return (
    <Box sx={{ width: { xs: "100%", sm: "83%" }, margin: "90px auto 30px auto" }}>
      <Box>
        <Typography variant="h3" textAlign="center" gutterBottom>
          Technical Skills
        </Typography>
        {renderSkills(technicalSkills)}
      </Box>
      {/* <Box mt={4}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Soft Skills
        </Typography>
        {renderSkills(softSkills)}
      </Box> */}
    </Box>
  );
};

export default SkillsSec1;
