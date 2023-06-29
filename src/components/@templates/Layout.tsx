import React from 'react';
import { Container, Box } from '@mui/material';
import Header from '../@organisms/Header';
import Footer from '../@organisms/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ backgroundColor: 'background.default', height: "100%" }}>
     <Header />
      <Container maxWidth="lg" sx={{height:'85%'}}>
        <Box marginTop={2}>{children}</Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
