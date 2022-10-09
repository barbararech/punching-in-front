import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import logo from "../../assets/images/logo.png";
import TemporaryDrawer from "../Menu";
import { HandlerContext } from "../../contexts/contextHandler";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "./styles";

export const ResponsiveAppBar = () => {
  const { logout } = useContext(HandlerContext);
  const navigate = useNavigate();

  return (
    <Container>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ background: "#ffffff" }}
        sx={{ flexGrow: 1, display: { xs: "flex" } }}
      >
        <Toolbar>
          <TemporaryDrawer />

          <Typography component="div" sx={{ flexGrow: 1, mt: 1 }}>
            <Link to="/home">
              <img src={logo} alt="logo" className="logo" edge="start" />
            </Link>
          </Typography>
          <Button
            onClick={() => {
              logout();
              navigate("/");
            }}
          >
            <ExitToAppIcon style={{ color: "#C58944" }}>Login</ExitToAppIcon>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </Container>
  );
};
