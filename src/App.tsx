import './App.css';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import HomePage from "screens/HomePage";

let theme = createTheme();
theme = responsiveFontSizes(theme);
theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <HomePage/>
    </ThemeProvider>
    </>
  );
}

export default App;
