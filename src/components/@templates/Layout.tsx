import React from 'react';
import { Container, Box } from '@mui/material';
import Header from '../@organisms/Header';
import Footer from '../@organisms/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <Header />
      <Container maxWidth="lg">
        <Box marginTop={2}>{children}</Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
