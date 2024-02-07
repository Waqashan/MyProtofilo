
import { Container, Typography, Grid, Card, CardActionArea, CardContent, CardMedia, Box } from '@mui/material';

const Projects = () => {
  // Dummy project data, replace with your actual project data
  const projects = [
    {
      id: 1,
      title: "Resume Builder",
      description: "Buid your Resume  .",
      image: "/assets/images/cv.png",
      category: "Web Development",

      technologies: ["React"],
      githubLink: "https://github.com/Waqashan",
    },
    {
      id: 1,
      title: "Resume Builder",
      description: "Buid your Resume  .",
      image: "/assets/images/cv.png",
      category: "Web Development",

      technologies: ["React"],
      githubLink: "https://github.com/Waqashan",
    },
    {
      id: 1,
      title: "Resume Builder",
      description: "Buid your Resume  .",
      image: "/assets/images/cv.png",
      category: "Web Development",

      technologies: ["React"],
      githubLink: "https://github.com/Waqashan",
    },
    {
      id: 1,
      title: "Resume Builder",
      description: "Buid your Resume  .",
      image: "/assets/images/cv.png",
      category: "Web Development",

      technologies: ["React"],
      githubLink: "https://github.com/Waqashan",
    },
    {
      id: 1,
      title: "Resume Builder",
      description: "Buid your Resume  .",
      image: "/assets/images/cv.png",
      category: "Web Development",

      technologies: ["React"],
      githubLink: "https://github.com/Waqashan",
    },
    {
      id: 2,
      title: "Login Page",
      description: "Simple Login page.",
      image: "/assets/images/login.jpg",
      category: "Web Devlopment",

      technologies: ["React.js", "MUI"],
      githubLink: "https://github.com/Waqashan",
    },
    {
      id: 3,
      title: "Inventory app",
      description: "This is the Inventory management system app",
      image: "/assets/images/p2.jpg",
      category: "Web Development",

      technologies: ["Node", "Express", "React", "MongoDb"],
      githubLink: "https://github.com/Waqashan",
    },
  ];
  return (
    <Box py={6}  mt={10}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" mb={4} gutterBottom>Projects</Typography>
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item key={project.id} xs={12} sm={6} md={4}>
              <Card sx={{ position: "relative" }}>
                <CardActionArea
                  component="a"
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    height="200"
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      gutterBottom
                    >
                      {project.description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Category: {project.category}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="textSecondary"
                      gutterBottom
                    >
                      Technologies: {project.technologies.join(", ")}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
