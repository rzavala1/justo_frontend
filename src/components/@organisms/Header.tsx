import React from 'react';
import { useRouter } from 'next/router';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header: React.FC = () => {

  const router = useRouter();

  const handleLogout = () => {
    router.push('/logout');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          Spy Agency
        </Typography>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
