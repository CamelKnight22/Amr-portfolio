import * as React from "react";
import { Outlet, useNavigate } from "react-router-dom";
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

import { Paths } from "./type";

import "./App.css";

const drawerWidth = 240;

const navItems = [
  { to: Paths.Home, label: "Home" },
  { to: Paths.AboutMe, label: "About Me" },
  { to: Paths.Projects, label: "Projects" },
  { to: Paths.Blogs, label: "Blogs" },
];

type Props = any;

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
      component="div"
    >
      <Typography sx={{ my: 2, color: "white" }}>Amr's Portfolio</Typography>
      <Divider />
      <List sx={{ color: "white" }}>
        {navItems.map((item) => (
          <ListItem key={item.to} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => navigate(item.to, { replace: true })}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box component="div">
      <AppBar
        component="nav"
        sx={{
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
          background: "linear-gradient(to right, #463f53, #8363c2)",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, alignSelf: "right" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="div"
            sx={{
              color: "white",
              fontWeight: 600,
              fontSize: 30,
              m: 3,
              flexGrow: 1,
            }}
          >
            Amr's Portfolio
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }} component="div">
            {navItems.map((item) => (
              <Button
                key={item.to}
                sx={{
                  color: "#fff",
                  fontSize: 20,
                  fontWeight: 500,
                }}
                onClick={() => navigate(item.to, { replace: true })}
              >
                {item.label}
              </Button>
            ))}
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
              background: "linear-gradient(to right, #463f53, #8363c2)",
              borderBottomRightRadius: 5,
              borderTopRightRadius: 5,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box sx={{ mt: 6, p: 2 }} component="div">
        <Outlet />
      </Box>
    </Box>
  );
}
