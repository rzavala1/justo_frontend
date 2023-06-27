import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

type ButtonProps = MuiButtonProps;

const Button: React.FC<ButtonProps> = (props) => {
  return <MuiButton {...props} />;
};

export default Button;
