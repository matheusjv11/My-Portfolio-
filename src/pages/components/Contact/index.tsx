import { ContactSection } from "@/styles/contact";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4d0978",
    },
  },
});

export default function Contact() {

  const openEmailPage = () => {
    window.location.href = "mailto:matheusjv14@gmail.com?subject=From your personal website&body=I'm...";
  }

  return (
    <ContactSection id="contact">
      <div className="wrap">
        <ThemeProvider theme={theme}>
          <div className="description-card">
            <h2>Contact me</h2>
            <p>
              There is something you want to discuss? Reach me through the button below, which will redirect you to an email creation page. 
              I would love to trade ideas and inspirations 😄.
            </p>
          </div>
        </ThemeProvider>
        <button onClick={openEmailPage}>I'm the button :)</button>
      </div>
    </ContactSection>
  );
}
