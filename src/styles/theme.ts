import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', 
    },
    secondary: {
      main: '#FF0000', 
    },
    background: {
      default: '#e4e4e4',
      paper: '#1E1E1E', 
    },
    text: {
      primary: '#FFFFFF', 
      secondary: '#CCCCCC', 
    },
  },
});

export default theme;
