import React from "react";
import { Main, Container, Message } from "../HomePage/styles";
import { ResponsiveAppBar } from "../../components/Navbar/index";
import { useState, useEffect, useContext } from "react";
import { viewArchivedCards } from "../../services/api";
import { HandlerContext } from "../../contexts/contextHandler";
import BasicCard from "../../components/BasicCard";

export default function ArchivePage() {
  const { userData, setUserData } = useContext(HandlerContext);
  const [applications, setApplications] = useState([]);
  const { refresh, setRefresh } = useContext(HandlerContext);

  const config = {
    headers: {
      Authorization: `Bearer ${userData.token}`,
    },
  };

  useEffect(() => {
    async function ViewArchivedCards() {
      try {
        const response = await viewArchivedCards(config);
        setApplications(response.applications);
      } catch (error) {
        console.log(error);
        alert(error.message);
      }
    }
    ViewArchivedCards();
  }, [refresh]);

  function RenderCards() {
    console.log(applications);
    if (applications.length === 0) {
      return <Message> nothing here!</Message>;
    }

    return applications.map(
      ({
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
      }) => {
        return (
          <BasicCard
            id={id}
            companyName={companyName}
            roleName={roleName}
            priority={priority}
            jobDescription={jobDescription}
            observations={observations}
            heardBack={heardBack}
            itsArchived={itsArchived}
            attachments={attachments}
            steps={steps}
            index={index}
            config={config}
          />
        );
      }
    );
  }

  return (
    <Main>
      <Container>
        <ResponsiveAppBar />
        <RenderCards />
      </Container>
    </Main>
  );
}
