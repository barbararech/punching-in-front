import React from 'react';
import { ResponsiveAppBar } from '../../components/Navbar';
import { Main, Container, Message } from '../HomePage/styles';

export default function TipsPage() {
  return (
    <Main>
      <Container>
        <ResponsiveAppBar />
        <Message>coming soon!</Message>
      </Container>
    </Main>
  );
}
