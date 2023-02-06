import React from 'react';
import MyFilesCard from '../../components/MyFilesCard';
import { ResponsiveAppBar } from '../../components/Navbar';
import { Main, Container, Message } from '../HomePage/styles';
import { useState, useEffect, useContext } from 'react';
import { viewUserAttachments } from '../../services/api';
import { HandlerContext } from '../../contexts/contextHandler';

export default function MyFilesPage() {
  const { userData } = useContext(HandlerContext);
  const [myFiles, setMyFiles] = useState([]);
  const { refresh } = useContext(HandlerContext);
  console.log(userData.token);
  const config = {
    headers: {
      Authorization: `Bearer ${userData.token}`,
    },
  };

  useEffect(() => {
    async function ViewMyFilesCards() {
      try {
        const response = await viewUserAttachments(config);
        setMyFiles(response.attachments);
      } catch (error) {
        console.log(error);
        alert(error.message);
      }
    }
    ViewMyFilesCards();
  }, [refresh]);
  console.log(myFiles);

  function RenderMyFilesCards() {
    if (myFiles.length === 0) {
      return <Message> nothing here!</Message>;
    }

    return myFiles.map(
      ({
        id,
        type,
        link,
        applications,
        name
      }) => {
        return (
          <MyFilesCard
            id={id}
            companyName={applications.companyName}
            roleName={applications.roleName}
            type={type}
            link={link}
            name={name}
          />
        );
      }
    );
  }

  
  return (
    <Main>
      <Container>
        <ResponsiveAppBar />
        <RenderMyFilesCards />
      </Container>
    </Main>
  );
}
