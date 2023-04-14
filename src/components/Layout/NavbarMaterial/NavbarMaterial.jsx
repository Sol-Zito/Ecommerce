import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Avatar } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ThemeContext } from "../../../Context/Themes";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const drawerWidth = 200;

const NavbarMaterial = (props) => {
  const { dispatch } = useContext(ThemeContext);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigate = useNavigate();

  const drawer = (
    <>
      <Toolbar />
      <Box
        display={"flex"}
        flexDirection="column"
        spacing={0}
        justifyContent="center"
        alignItems={"center"}
      >
        <Avatar alt="Remy Sharp" src={"sadsa"} />
      </Box>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => dispatch({ type: "CHANGE_MOD" })}>
            <ListItemIcon>
              <DarkModeIcon />
            </ListItemIcon>
            <ListItemText primary={"ChangeMod"} sx={{ color: "black" }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/home")}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Inicio"} sx={{ color: "black" }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/shop")}>
            <ListItemIcon>
              <StoreMallDirectoryIcon />
            </ListItemIcon>
            <ListItemText primary={"Tienda"} sx={{ color: "black" }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/cart")}>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary={"Carrito"} sx={{ color: "black" }} />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar
          sx={{ gap: "20px", display: "flex", justifyContent: "space-between" }}
        >
          <Box>
            <img
              src="data:image/jpeg;base64,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"
              alt="logo"
              style={{ width: "70px" }}
            />
          </Box>
          <IconButton
            color="secondary.primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon color="secondary.primary" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          anchor={"right"}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#1976d2",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#1976d2",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          minHeight: "100vh",
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default NavbarMaterial;
