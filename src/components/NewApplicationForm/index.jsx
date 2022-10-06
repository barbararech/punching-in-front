import * as React from "react";
import {
  Box,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";

export default function ApplicationForm(
  companyName,
  roleName,
  jobDescription,
  observations,
  priority,
  heardBack,
  handleChange
) {
  return (
    <>
      {TextFields(
        companyName,
        roleName,
        jobDescription,
        observations,
        handleChange
      )}
      {SelectFields(priority, heardBack, handleChange)}
    </>
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
