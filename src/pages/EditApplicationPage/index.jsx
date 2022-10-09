import React, { useEffect } from "react";
import { Main, Container } from "../HomePage/styles";
import { ResponsiveAppBar } from "../../components/Navbar/index";
import NewCard from "../../components/NewCard/index";
import { useState, useContext } from "react";
import { useFormik } from "formik";
import {
  updateApplication,
  updateSteps,
  updateAttachments,
  viewApplication,
  viewStepsByApplicationId,
  viewAttachmentsByApplicationId,
} from "../../services/api";
import { HandlerContext } from "../../contexts/contextHandler";
import { useNavigate, useParams } from "react-router-dom";

export default function EditApplicationPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const editApplication = true;

  const { userData } = useContext(HandlerContext);
  const config = {
    headers: {
      Authorization: `Bearer ${userData.token}`,
    },
  };

  const [application, setApplication] = useState([]);

  const [stepsGroup, setStepsGroup] = useState([
    { name: "", deadline: "", itsFinished: "" },
  ]);

  const [attachmentsGroup, setAttachmentsGroup] = useState([
    { name: "", link: "", type: "" },
  ]);

  useEffect(() => {
    async function getApplicationByid() {
      try {
        const responseApplication = await viewApplication(id, config);
        setApplication(responseApplication.application);
        const responseSteps = await viewStepsByApplicationId(id, config);
        setStepsGroup(responseSteps.steps);
        const responseAttachments = await viewAttachmentsByApplicationId(
          id,
          config
        );
        setAttachmentsGroup(responseAttachments.attachments);
      } catch (error) {
        console.log(error);
        alert(error.message);
      }
    }
    getApplicationByid();
  }, []);

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
      await updateApplication(application.id, applicationData, config);

      const stepsWithId = stepsGroup.map((el) => {
        return { ...el, applicationId: application.id };
      });
      const stepsData = { steps: stepsWithId };
      await updateSteps(stepsData, config);

      const attachmentsWithId = attachmentsGroup.map((el) => ({
        ...el,
        applicationId: application.id,
      }));
      const attachmentsData = { attachments: attachmentsWithId };
      console.log(attachmentsData);
      await updateAttachments(attachmentsData, config);

      alert("Application updated successfully!");
      navigate("/home");
    } catch (error) {
      console.log(error);
      alert(
        `New application wasn't created successfully! Error: ${error.message}`
      );
    }
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    enableReinitialize,
  } = useFormik({
    initialValues: {
      companyName: application.companyName || "",
      roleName: application.roleName || "",
      heardBack: application.heardBack || "",
      priority: application.priority || "",
      jobDescription: application.jobDescription || "",
      observations: application.observations || "",
      steps: [stepsGroup],
      attachments: [attachmentsGroup],
    },
    enableReinitialize: true,
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
          setAttachmentsGroup,
          editApplication
        )}
      </Container>
    </Main>
  );
}
