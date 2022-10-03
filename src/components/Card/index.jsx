import * as React from "react";
import {
  Card,
  Collapse,
  CardActions,
  CardContent,
  Button,
  Typography,
  Box,
  Divider,
  ListItemButton,
} from "@mui/material";
import { Container } from "./styles";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ArchiveIcon from "@mui/icons-material/Archive";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  const [open, setOpen] = React.useState(true);
  const [heardBack, setHeardBack] = React.useState(false);
  const [taskIsFinished, seTtaskIsFinished] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <Card sx={{ minWidth: 175 }}>
        <CardContent>
          <ListItemButton onClick={handleClick} sx={{ position: "relative" }}>
            {open ? (
              <ExpandLess className="expand" />
            ) : (
              <ExpandMore className="expand" />
            )}
            <Typography component="div">
              <Typography className="title">Company Name</Typography>
              <Typography className="subtitle">Role</Typography>
              <BorderColorIcon className="editIcon" />
              <ArchiveIcon className="archiveIcon" />
            </Typography>
          </ListItemButton>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <Divider className="divider" />
            <Typography component="div" className="content">
              <Typography component="div" className="subcontent">
                <Typography className="subtitle" gutterBottom>
                  Tasks
                </Typography>
                <Typography className="subtitle" gutterBottom>
                  Status
                </Typography>
              </Typography>
            </Typography>

            <Divider className="divider" />
            <Typography component="div" className="contentTasks" color={taskIsFinished? "#029866" : "	#ff9966"}>
              <Typography component="div" className="subcontent">
                <Typography className="task" gutterBottom>
                  <CheckCircleIcon className="checkIcon" />
                  Send CV
                </Typography>
                <Typography className="tasksLabel" gutterBottom>
                  On track!
                </Typography>
              </Typography>
            </Typography>

            <Divider className="divider" />
            <Typography component="div" className="content">
              <Typography component="div" className="subcontent">
                <Typography className="subtitle" gutterBottom>
                  Job description
                  <OpenInNewIcon className="openInNewIcon" />
                </Typography>
              </Typography>
            </Typography>

            <Divider className="divider" />
            <Typography component="div" className="content">
              <Typography component="div" className="subcontent">
                <Typography className="subtitle" gutterBottom>
                  My attachments
                </Typography>
              </Typography>
            </Typography>

            <Divider className="divider" />
            <Typography component="div" className="content">
              <Typography component="div" className="subcontent">
                <Typography className="subtitle" gutterBottom>
                  Heard back?
                </Typography>
                <Typography
                  className="heardBack"
                  color={heardBack ? "#029866" : "error"}
                  gutterBottom
                >
                  No
                </Typography>
              </Typography>
            </Typography>

            <Divider className="divider" />
            <Typography component="div" className="content">
              <Typography component="div" className="subcontent">
                <Typography className="subtitle" gutterBottom>
                  Observations
                </Typography>
              </Typography>
            </Typography>
            <Divider className="divider" />
            <Typography component="div" className="content">
              <Typography component="div" className="subcontent">
                nothing here!
              </Typography>
            </Typography>
          </Collapse>
        </CardContent>
      </Card>
    </Container>
  );
}
