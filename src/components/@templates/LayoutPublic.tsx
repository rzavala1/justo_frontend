import React from 'react';
import { Container, Box } from '@mui/material';
import HeaderPublic from '../@organisms/HeaderPublic';
import Footer from '../@organisms/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutPublic: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ backgroundColor: 'background.default', height: "100%" }}>
      <HeaderPublic />
      <Container maxWidth="lg" sx={{height:'85%'}}>
        <Box marginTop={2}>{children}</Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default LayoutPublic;
