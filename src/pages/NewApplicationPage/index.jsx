import React from "react";
import { Main, Container } from "../HomePage/styles";
import { ResponsiveAppBar } from "../../components/Navbar/index";
import NewCard from "../../components/NewCard/index";
import { useState, useContext } from "react";
import { useFormik } from "formik";
import {
  createApplication,
  createSteps,
  createAttachments,
} from "../../services/api";
import { HandlerContext } from "../../contexts/contextHandler";
import { useNavigate } from "react-router-dom";

export default function NewApplicationPage() {
  const navigate = useNavigate();
  const { userData } = useContext(HandlerContext);

  const config = {
    headers: {
      Authorization: `Bearer ${userData.token}`,
    },
  };

  const onSubmit = async (values) => {
    console.log(attachmentsGroup)
    try {
      const applicationData = {
        companyName: values.companyName,
        heardBack: values.heardBack,
        jobDescription: values.jobDescription,
        observations: values.observations,
        priority: values.priority,
        roleName: values.roleName,
      };
      console.log(values);
      const promise = await createApplication(applicationData, config);

      const stepsWithId = stepsGroup.map((el) => {
        return { ...el, applicationId: promise.id };
      });
      const stepsData = { steps: stepsWithId };
      console.log(stepsData)
      await createSteps(stepsData, config);

      const attachmentsWithId = attachmentsGroup.map((el) => ({
        ...el,
        applicationId: promise.id,
      }));
      const attachmentsData = { attachments: attachmentsWithId };
      console.log(attachmentsData)
      await createAttachments(attachmentsData, config);

      alert("New application created successfully!");
      navigate("/home");
    } catch (error) {
      console.log(error);
      alert(
        `New application wasn't created successfully! Error: ${error.message}`
      );
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
    <Main>
      <Container>
        <ResponsiveAppBar />
        {NewCard(
          values,
          handleChange,
          handleSubmit,
          stepsGroup,
          setStepsGroup,
          attachmentsGroup,
          setAttachmentsGroup
        )}
      </Container>
    </Main>
  );
}
