import { createTheme, ThemeProvider as Provider } from '@mui/material/styles';
import vars from '@/styles/vars.module.scss';

let theme = createTheme({});

theme = createTheme(theme, {
  palette: {
    primary: theme.palette.augmentColor({
      color: {
        main: vars.colorPrimaryMain,
      },
      name: 'primary',
    }),
  },
});

function ThemeProvider({ children }) {
  return <Provider theme={theme}>{children}</Provider>;
}

export default ThemeProvider;
