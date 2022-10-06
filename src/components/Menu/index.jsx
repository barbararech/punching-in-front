import * as React from "react";
import {
  Link,
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArchiveIcon from "@mui/icons-material/Archive";
import PostAddIcon from "@mui/icons-material/PostAdd";
import ArticleIcon from "@mui/icons-material/Article";
import HomeIcon from "@mui/icons-material/Home";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {RenderItemsMenu()}
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {
              <MenuIcon
                size="large"
                edge="start"
                style={{ color: "#C58944" }}
                aria-label="menu"
                sx={{ mr: 2 }}
              />
            }
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

function RenderItemsMenu() {
  const itemsMenu = [
    "New Application",
    "Home",
    "Archives",
    "My resumes",
    "Job application tips",
  ];

  const linksMenu = [
    "/newapplication",
    "/home",
    "/archives",
    "/my-resumes",
    "/tips",
  ];

  const iconsMenu = [
    <PostAddIcon />,
    <HomeIcon />,
    <ArchiveIcon />,
    <ArticleIcon />,
    <TipsAndUpdatesIcon />,
  ];

  return itemsMenu.map((item, index) => {
    return (
      <List key={index}>
        <Link
          href={linksMenu[index]}
          underline="none"
          style={{ color: "#C58944" }}
        >
          <ListItem key={item} disablePadding>
            <ListItemButton style={{ color: "#C5894" }}>
              <ListItemIcon style={{ color: "#C58944" }}>
                {iconsMenu[index]}
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        </Link>
        {index === 0 ? <Divider /> : ""}
      </List>
    );
  });
}
