import React from 'react';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';

type TextFieldProps = MuiTextFieldProps;

const TextField: React.FC<TextFieldProps> = (props) => {
  return <MuiTextField {...props} />;
};

export default TextField;