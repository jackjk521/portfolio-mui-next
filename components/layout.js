// Components
import Navbar from "./navbar";
import Footer from "./footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme(); // Create a Material-UI theme

export default function Layout({ children }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* Navigation bar  */}
        <Navbar />

       {children}

        {/* Footer  */}
        <Footer />
      </ThemeProvider>
    </>
  );
}
