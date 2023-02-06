import React from 'react';
import MyFilesCard from '../../components/MyFilesCard';
import { ResponsiveAppBar } from '../../components/Navbar';
import { Main, Container, Message } from '../HomePage/styles';

export default function MyFilesPage() {
  return (
    <Main>
      <Container>
        <ResponsiveAppBar />
      <MyFilesCard />
      </Container>
    </Main>
  );
}
