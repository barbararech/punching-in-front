import * as React from "react";
import { useState, useContext } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { Container } from "./styles";
import { useFormik } from "formik";
import {
  createApplication,
  createSteps,
  createAttachments,
} from "../../services/api";
import { HandlerContext } from "../../contexts/contextHandler";
import { useNavigate } from "react-router-dom";
import AttachmentsForm from "../NewAttachmentsForm/index";
import StepsForm from "../NewStepsForm/index";
import ApplicationForm from "../NewApplicationForm/index";

export default function NewCard() {
  const navigate = useNavigate();
  const { userData } = useContext(HandlerContext);

  const config = {
    headers: {
      Authorization: `Bearer ${userData.token}`,
    },
  };

  const onSubmit = async (values) => {
    try {
      const applicationData = {
        companyName: values.companyName,
        heardBack: values.heardBack,
        jobDescription: values.jobDescription,
        observations: values.observations,
        priority: values.priority,
        roleName: values.roleName,
      };
      const promise = await createApplication(applicationData, config);

      const stepsWithId = stepsGroup.map((el) => {
        return { ...el, applicationId: promise.id };
      });
      const stepsData = { steps: stepsWithId };
      await createSteps(stepsData, config);

      const attachmentsWithId = attachmentsGroup.map((el) => ({
        ...el,
        applicationId: promise.id,
      }));
      const attachmentsData = { attachments: attachmentsWithId };
      await createAttachments(attachmentsData, config);

      navigate("/home");
    } catch (error) {
      console.log(error);
      alert(error.response.data);
    }
  };

  const [stepsGroup, setStepsGroup] = useState([
    { name: "", deadline: "", itsFinished: "" },
  ]);

  const [attachmentsGroup, setAttachmentsGroup] = useState([
    { name: "", link: "", type: "" },
  ]);

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
          {ApplicationForm(
            values.companyName,
            values.roleName,
            values.jobDescription,
            values.observations,
            values.priority,
            values.heardBack,
            handleChange
          )}
          {StepsForm(stepsGroup, setStepsGroup)}
          {AttachmentsForm(attachmentsGroup, setAttachmentsGroup)}
        </CardContent>
        <CardActions>
          <Button size="large" color="success" onClick={handleSubmit}>
            Submit
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
