import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

export default function NavBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <a href="https://rashadbayram.com/">
        <Typography variant="h6" sx={{ my: 2 }}>
          Rashad Bayram
        </Typography>
      </a>
      <Divider />
      <List>
        <ListItem disablePadding sx={{ flexDirection: "column" }}>
          <Link to="/posts">
            <ListItemButton
              sx={{ textAlign: "center", flexDirection: "column" }}
            >
              <ListItemText primary="ARTICLES" />
            </ListItemButton>
          </Link>
          <Link to="/about">
            <ListItemButton
              sx={{ textAlign: "center", flexDirection: "column" }}
            >
              <ListItemText primary="ABOUT" />
            </ListItemButton>
          </Link>
          <Link to="/contact">
            <ListItemButton
              sx={{ textAlign: "center", flexDirection: "column" }}
            >
              <ListItemText primary="CONTACT" />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
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
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <a href="https://rashadbayram.com/">Rashad Bayram</a>
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to="/posts">
              <Button sx={{ color: "#fff" }}>ARTICLES</Button>
            </Link>
            <Link to="/about">
              <Button sx={{ color: "#fff" }}>ABOUT</Button>
            </Link>
            <Link to="/contact">
              <Button sx={{ color: "#fff" }}>CONTACT</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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
      </Box>
    </Box>
  );
}
