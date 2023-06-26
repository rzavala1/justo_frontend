import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

interface ButtonProps extends MuiButtonProps {
  // Agrega cualquier prop adicional que desees
}

const Button: React.FC<ButtonProps> = (props) => {
  return <MuiButton {...props} />;
};

export default Button;
