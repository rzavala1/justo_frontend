import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          Spy Agency | Inicio de sesión
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
