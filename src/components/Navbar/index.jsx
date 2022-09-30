import * as React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link as LinkReact } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import TemporaryDrawer from "../Menu";

export const ResponsiveAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ background: "#ffffff" }}
        sx={{ flexGrow: 1, display: { xs: "flex" } }}
      >
        <Toolbar>
          <TemporaryDrawer />
          <Typography component="div" sx={{ flexGrow: 1, mt: 1 }}>
            <img src={logo} alt="logo" width={300} edge="start" />
          </Typography>
          <LinkReact to="/signout">
            <ExitToAppIcon style={{ color: "#C58944" }}>Login</ExitToAppIcon>
          </LinkReact>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
