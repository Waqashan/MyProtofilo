import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom"; // Import NavLink for navigation
import MenuIcon from "@mui/icons-material/Menu";
import "./NavBar.css";

const drawerWidth = 240;
const navItems = [
  { menu: "Home", route: "/" },
  { menu: "Projects", route: "/projects" },
  { menu: "Skills", route: "/skills" },
  { menu: "About", route: "/about" },
  { menu: "Contact", route: "/contact" },
];

function Header(props: any) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center",padding:"0 10px" }}
    className="mobileMenu"
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        MyProfile
      </Typography>
      <Divider />
      {navItems.map((item) => (
        <Button
          key={item.menu}
          

          sx={{ color: "black", width: "100%" }}
          component={NavLink}
          to={item.route}
          onClick={handleDrawerToggle}
        >
          {item.menu}
        </Button>
      ))}
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ border: "1px solid black", marginTop: "20px" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: "black", padding: "10px 0" }}>
        <Toolbar sx={{ width: { xs: "100%", md: "83%" }, margin: "0 auto" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "block"} }}
          >
            MyProfile
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }} className="LargeScreen">
            {navItems.map((item) => (
              <Button
                key={item.menu}
                sx={{ color: "#fff" }}
                component={NavLink}
                to={item.route}
              >
                {item.menu}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Header;
