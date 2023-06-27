import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Color principal (negro)
    },
    secondary: {
      main: '#FF0000', // Color secundario (rojo)
    },
    background: {
      default: '#e4e4e4', // Color de fondo (gris oscuro)
      paper: '#1E1E1E', // Color de fondo para componentes de papel (gris más oscuro)
    },
    text: {
      primary: '#FFFFFF', // Color de texto principal (blanco)
      secondary: '#CCCCCC', // Color de texto secundario (gris claro)
    },
  },
});

export default theme;
