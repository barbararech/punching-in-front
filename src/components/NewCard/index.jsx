import * as React from "react";
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
} from "@mui/material";

import { Container } from "./styles";
import { TaskSharp } from "@mui/icons-material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function NewCard() {
  const [priority, setPriority] = React.useState("");
  const [heardBack, setHeardBack] = React.useState("");

  const handleChange = (event) => {
    setPriority(event.target.value);
  };

  const handleHeardBackChange = (event) => {
    setHeardBack(event.target.value);
  };

  return (
    <Container>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography className="title" gutterBottom>
            New Application
          </Typography>
          {TextFields()}
          {SelectFields(
            priority,
            handleChange,
            heardBack,
            handleHeardBackChange
          )}
           <Typography className="subtitle" gutterBottom>
           Tasks
          </Typography>
          {/* {Tasks()} */}
        </CardContent>
        <CardActions>
          <Button size="medium" color="success">
            Submit
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}

function TextFields() {
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
        label="company name"
        variant="standard"
        color="success"
      />
      <TextField
        id="roleName"
        label="role name"
        variant="standard"
        color="success"
      />
      <TextField
        id="jobDescription"
        label="link to job description"
        variant="standard"
        color="success"
      />
      <TextField
        id="observations"
        label="observations"
        variant="standard"
        color="success"
      />
    </Box>
  );
}

function SelectFields(
  priority,
  handleChange,
  heardBack,
  handleHeardBackChange
) {
  return (
    <>
      <Box sx={{ minWidth: 275, marginTop: 2 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">priority</InputLabel>
          <Select
            labelId="priority"
            id="demo-simple-select"
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
            id="demo-simple-select"
            value={heardBack}
            label="heard Back?"
            onChange={handleHeardBackChange}
            color="success"
          >
            <MenuItem value={"yes"}>yes</MenuItem>
            <MenuItem value={"no"}>no</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
