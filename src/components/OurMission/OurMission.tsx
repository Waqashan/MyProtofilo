
import {
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";

const OurMission = () => {
  // Dummy project data, replace with your actual project data
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/images/project1.jpg",
      category: "Web Development",
      date: "September 2023",
      technologies: ["React", "Node.js", "MongoDB"],
      githubLink: "https://github.com/yourusername/project1",
    },
    {
      id: 2,
      title: "Project 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/project2.jpg",
      category: "Mobile App",
      date: "October 2023",
      technologies: ["React Native", "Firebase"],
      githubLink: "https://github.com/yourusername/project2",
    },
    {
      id: 3,
      title: "Project 3",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/images/project3.jpg",
      category: "Data Science",
      date: "November 2023",
      technologies: ["Python", "TensorFlow", "Pandas"],
      githubLink: "https://github.com/yourusername/project3",
    },
  ];

  return (
    <Box py={6}>
      <Container maxWidth="lg">
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
                    <Typography variant="body2" color="textSecondary">
                      Date: {project.date}
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

export default OurMission;
