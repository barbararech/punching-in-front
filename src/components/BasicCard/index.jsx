import * as React from "react";
import {
  Card,
  Link,
  Collapse,
  CardContent,
  Typography,
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
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArticleIcon from "@mui/icons-material/Article";
import { archivedCardToggle, deleteApplication } from "../../services/api";
import { useContext } from "react";
import { HandlerContext } from "../../contexts/contextHandler";
import CircleIcon from "@mui/icons-material/Circle";
import DeleteIcon from "@mui/icons-material/Delete";
import UnarchiveIcon from "@mui/icons-material/Unarchive";

export default function BasicCard({
  id,
  companyName,
  roleName,
  priority,
  jobDescription,
  observations,
  heardBack,
  itsArchived,
  attachments,
  steps,
  index,
  config,
}) {
  const [open, setOpen] = React.useState(false);
  const { refresh, setRefresh } = useContext(HandlerContext);

  const handleClick = () => {
    setOpen(!open);
  };

  const archiveCardToggle = async (id, config) => {
    try {
      itsArchived = !itsArchived;
      await archivedCardToggle(id, itsArchived, config);
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  const deleteCard = async (id, config) => {
    try {
      await deleteApplication(id, config);
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <Container priority={priority} key={index}>
      <Card sx={{ minWidth: 175 }}>
        <CardContent>
          <ListItemButton
            onClick={() => handleClick()}
            sx={{ position: "relative" }}
          >
            {open ? (
              <ExpandLess className="expand" />
            ) : (
              <ExpandMore className="expand" />
            )}
            <Typography component="div">
              <Typography className="title">{companyName}</Typography>
              <Typography className="subtitle">{roleName}</Typography>

              {open ? (
                <>
                  {actionsIcons(
                    id,
                    config,
                    itsArchived,
                    archiveCardToggle,
                    deleteCard
                  )}
                </>
              ) : (
                <Typography component="div" className="priority">
                  {priority} priority
                </Typography>
              )}
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
            {RenderTasks(steps)}

            <Divider className="divider" />
            <Typography component="div" className="content">
              <Typography component="div" className="subcontent">
                <Typography className="subtitle" gutterBottom>
                  <Link href={jobDescription} underline="none" color="gray">
                    Job description
                  </Link>
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
            {RenderAttachments(attachments)}

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
                  {heardBack ? "Yes" : "No"}
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
            <Typography component="div" className="observations">
              <Typography component="div" className="attachments">
                {observations ? observations : "nothing here!"}
              </Typography>
            </Typography>
          </Collapse>
        </CardContent>
      </Card>
    </Container>
  );
}

function RenderTasks(steps) {
  return steps.map(({ name, deadline, itsFinished }) => {
    return (
      <>
        <Typography
          component="div"
          className="contentTasks"
          color={itsFinished ? "#029866" : "	#black"}
        >
          <Typography component="div" className="subcontent">
            <Typography className="task" gutterBottom component={"span"}>
              {itsFinished ? (
                <CheckCircleIcon className="checkIcon" />
              ) : (
                <RadioButtonUncheckedIcon className="checkIcon" />
              )}
              {name}
            </Typography>

            <Typography className="tasksLabel" component="div" gutterBottom>
              <Typography className="tasksTrack" component="div">
                <CircleIcon className="circleIcon" />
                {itsFinished ? "On track!" : "Not done yet!"}
              </Typography>
              <Typography
                className="tasksDeadline"
                component="div"
                gutterBottom
              >
                {deadline}
              </Typography>
            </Typography>
          </Typography>
        </Typography>
      </>
    );
  });
}

function RenderAttachments(attachments) {
  return attachments.map(({ name, link }) => {
    return (
      <>
        <Typography component="div" className="content">
          <Typography component="div" className="subcontent">
            <Typography className="attachments" gutterBottom>
              <Link href={link} underline="none" color="black">
                <Typography className="myattachment" gutterBottom>
                  <ArticleIcon className="articleIcon" />
                  {name}
                </Typography>
              </Link>
            </Typography>
          </Typography>
        </Typography>
      </>
    );
  });
}

function actionsIcons(id, config, itsArchived, archiveCardToggle, deleteCard) {
  return (
    <>
      {itsArchived ? (
        <>
          <DeleteIcon
            className="editIcon"
            onClick={() => deleteCard(id, config)}
          />
          <UnarchiveIcon
            className="archiveIcon"
            onClick={() => archiveCardToggle(id, config)}
          />
        </>
      ) : (
        <>
          <Link href={`/applications/${id}/edit`} underline="none">
            <BorderColorIcon className="editIcon" />
          </Link>
          <ArchiveIcon
            className="archiveIcon"
            onClick={() => archiveCardToggle(id, config)}
          />
        </>
      )}
    </>
  );
}
