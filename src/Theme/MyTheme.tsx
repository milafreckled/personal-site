import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
interface Theme {
  status: {
    danger: string;
  };
}
// allow configuration using `createTheme`
interface ThemeOptions {
  status?: {
    danger?: string;
  };
}
}

const myTheme = createTheme({
    palette: {
    primary: {
      main: '#4B3869',
    },
    secondary: {
      main: '#664E88',
    },
    background: {
      default: '#4B3869',
      paper: '#664e88',
    },
    text: {
      disabled: 'rgba(177,177,177,0.5)',
      secondary: 'rgba(0,0,0,0.7)',
    },
  },
  typography: {
    subtitle1: {
      fontFamily: 'Droid Sans',
    },
    subtitle2: {
      fontFamily: 'Droid Sans',
    },
    button: {
      fontWeight: 600,
      letterSpacing: '0.13em',
    },
    caption: {
      fontFamily: 'Droid Sans',
    },
  },
  spacing: 2
});

export default myTheme;