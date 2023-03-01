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
  const emailjs_serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
  const emailjs_templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
  const emailjs_publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        emailjs_serviceID,
        emailjs_templateID,
        e.currentTarget,
        emailjs_publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.currentTarget.reset();
  };

  return (
    <ContactSection id="contact">
      <div className="wrap">
        <ThemeProvider theme={theme}>
          <div className="description-card">
            <h2>Contact me</h2>
            <p>
              There is somenthing you want to discuss? Fill the form and I will
              get back to you as soons as possible. 😄
            </p>
          </div>

          <form onSubmit={sendEmail}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              color="primary"
              name="user_name"
            />
            <TextField
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
              color="primary"
              name="user_email"
            />
            <TextField
              id="outlined-basic"
              label="Message"
              variant="outlined"
              color="primary"
              name="message"
              multiline
              rows={6}
            />
            <Button type="submit" variant="outlined" color="primary">
              Submit
            </Button>
          </form>
        </ThemeProvider>
      </div>
    </ContactSection>
  );
}
