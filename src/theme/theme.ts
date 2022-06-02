import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      light: '#6ba6f3',
      main: '#1877f2',
    },
    secondary: {
      light: '#687898',
      main: '#323258',
    },
  },
});

theme = responsiveFontSizes(theme, {
  breakpoints: ['xs', 'sm', 'md', 'lg'],
  factor: 3,
  disableAlign: true,
});

export default theme;
