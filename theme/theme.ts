import createTheme from "@mui/material/styles/createTheme";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#333333",
      contrastText: "#e0e0e0",
    },
    secondary: {
      main: "#888888",
    },
    text: {
      primary: "#e0e0e0",
    },
    background: {
      default: "#121212",
      paper: "#1c1c1c",
    },
    error: {
      main: "#990000",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          height: "100vh",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f1f1f1",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
            borderRadius: "4px",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          "&::placeholder": {
            textAlign: "center",
          },
        },
      },
    },
  },
});

export default theme;
