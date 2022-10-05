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
import { useFormik } from "formik";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

export default function NewCard() {

  const onSubmit = async (values) => {
    try {
      //   const promise = await signInUser(values);
        console.log(values);
      navigate("/home");
    } catch (error) {
      console.log(error);
      alert(error.response.data);
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        companyName: "",
        roleName: "",
        heardBack: "",
        priority: "",
        jobDescription: "",
        observations: "",
        attachmentName: "",
        link: "",
        type: "",
        taskName: "",
        deadline: "",
        itsfinished: "",
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
          <Typography className="subtitle" gutterBottom>
            Tasks
          </Typography>
          {/* {TasksForm(handleChange)} */}
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

// function TasksForm(itsFinished, handleItsFinishedChange) {
//   return (
//     <>
//       <Box
//         component="form"
//         sx={{
//           "& > :not(style)": { m: 1, width: "98%" },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <TextField
//           id="name"
//           label="task name"
//           variant="standard"
//           color="success"
//         />
//       </Box>

//       <Box sx={{ minWidth: 275, marginTop: 2 }}>
//         <FormControl fullWidth>
//           <InputLabel id="demo-simple-select-label">its finished?</InputLabel>
//           <Select
//             labelId="its finished?"
//             id="itsfinished"
//             value={itsFinished}
//             label="its finished?"
//             onChange={handleItsFinishedChange}
//             color="success"
//           >
//             <MenuItem value={"yes"}>yes</MenuItem>
//             <MenuItem value={"no"}>no</MenuItem>
//           </Select>
//         </FormControl>
//       </Box>
//     </>
//   );
// }
