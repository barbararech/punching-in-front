import * as React from "react";
import { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Grid,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import { Container, ContainerTasks } from "./styles";
import { useFormik } from "formik";

export default function NewCard() {
  const onSubmit = async (values) => {
    try {
      values.steps = stepsGroup;
      alert(JSON.stringify(values, null));
      //   const promise = await signInUser(values);
      console.log(values);
    } catch (error) {
      console.log(error);
      alert(error.response.data);
    }
  };

  const [stepsGroup, setStepsGroup] = useState([
    { name: "", deadline: "", itsFinished: "" },
  ]);

  const attachmentsGroup = { name: "", link: "", type: "" };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        companyName: "",
        roleName: "",
        heardBack: "",
        priority: "",
        jobDescription: "",
        observations: "",
        steps: [stepsGroup],
        attachments: [attachmentsGroup],
      },
      onSubmit,
    });

  return (
    <Container>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography className="title" gutterBottom>
            New Application
          </Typography>
          {TextFields(
            values.companyName,
            values.roleName,
            values.jobDescription,
            values.observations,
            handleChange
          )}
          {SelectFields(values.priority, values.heardBack, handleChange)}
          {TasksForm(stepsGroup, setStepsGroup)}
        </CardContent>
        <CardActions>
          <Button size="medium" color="success" onClick={handleSubmit}>
            Submit
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}

function TextFields(
  companyName,
  roleName,
  jobDescription,
  observations,
  handleChange
) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "98%" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="companyName"
        name="companyName"
        label="company name"
        variant="standard"
        color="success"
        value={companyName}
        onChange={handleChange}
      />
      <TextField
        id="roleName"
        label="role name"
        variant="standard"
        color="success"
        value={roleName}
        onChange={handleChange}
      />
      <TextField
        id="jobDescription"
        label="link to job description"
        variant="standard"
        color="success"
        value={jobDescription}
        onChange={handleChange}
      />
      <TextField
        id="observations"
        label="observations"
        variant="standard"
        color="success"
        value={observations}
        onChange={handleChange}
      />
    </Box>
  );
}

function SelectFields(priority, heardBack, handleChange) {
  return (
    <>
      <Box sx={{ minWidth: 275, marginTop: 2 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">priority</InputLabel>
          <Select
            labelId="priority"
            id="priority"
            name="priority"
            value={priority}
            label="priority"
            onChange={handleChange}
            color="success"
          >
            <MenuItem value={"high"}>high</MenuItem>
            <MenuItem value={"medium"}>medium</MenuItem>
            <MenuItem value={"low"}>low</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 275, marginTop: 2 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">heard back?</InputLabel>
          <Select
            labelId="heardBack"
            id="heardBack"
            name="heardBack"
            value={heardBack}
            label="heard Back?"
            onChange={handleChange}
            color="success"
          >
            <MenuItem value={true}>yes</MenuItem>
            <MenuItem value={false}>no</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
}

function TasksForm(stepsGroup, setStepsGroup) {
  let handleChange = (i, e) => {
    let newStepsGroup = [...stepsGroup];
    newStepsGroup[i][e.target.name] = e.target.value;
    setStepsGroup(newStepsGroup);
  };

  let addFormFields = () => {
    setStepsGroup([...stepsGroup, { name: "", deadline: "", itsFinished: "" }]);
  };

  let removeFormFields = (i) => {
    let newStepsGroup = [...stepsGroup];
    newStepsGroup.splice(i, 1);
    setStepsGroup(newStepsGroup);
  };

  return (
    <ContainerTasks>
      <Typography className="subtitle" gutterBottom>
        Tasks
        <button
          className="buttonAdd"
          type="button"
          onClick={() => addFormFields()}
        >
          <AddCircleOutlineIcon className="addIcon" />
        </button>
      </Typography>
      <form>
        {stepsGroup.map((element, index) => (
          <>
            <Typography className="paragraph" gutterBottom>
              Task {index+1}
              {index ? (
                <button
                  type="button"
                  className="button remove"
                  onClick={() => removeFormFields(index)}
                >
                   <RemoveCircleOutlineIcon className="removeIcon" />
                </button>
              ) : null}
            </Typography>

            <div className="form-inline" key={index}>
              <TextField
                id="taskName"
                label="task name"
                variant="standard"
                color="success"
                type="text"
                name="name"
                value={element.name || ""}
                onChange={(e) => handleChange(index, e)}
                fullWidth
              />
              <TextField
                id="taskDeadline"
                label="deadline"
                variant="standard"
                color="success"
                type="text"
                name="deadline"
                value={element.deadline || ""}
                onChange={(e) => handleChange(index, e)}
                fullWidth
              />

              <FormControl fullWidth className="selectInputTasks">
                <InputLabel id="its Finished?">its Finished?</InputLabel>
                <Select
                  labelId="its Finished?"
                  id="itsFinished"
                  name="itsFinished"
                  value={element.itsFinished || ""}
                  label="its Finished?"
                  onChange={(e) => handleChange(index, e)}
                  color="success"
                  fullWidth
                >
                  <MenuItem value={true}>yes</MenuItem>
                  <MenuItem value={false}>no</MenuItem>
                </Select>
              </FormControl>
            </div>
          </>
        ))}
      </form>
    </ContainerTasks>
  );
}
