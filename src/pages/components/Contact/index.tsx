import { ContactSection } from "@/styles/contact";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import emailjs from "@emailjs/browser";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4d0978",
    },
  },
});

export default function Contact() {
  return (
    <ContactSection id="contact">
      <div className="wrap">
        <ThemeProvider theme={theme}>
          <div className="description-card">
            <h2>Contact me</h2>
            <p>
              There is somenthing you want to discuss? Reach me through LinkedIn Or E-mail. 
              I would love to trade ideas and inspirations 😄.
            </p>
          </div>
        </ThemeProvider>
      </div>
    </ContactSection>
  );
}
