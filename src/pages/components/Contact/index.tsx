
import { ContactSection } from "./style"
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4d0978'
        }
    }
})


export default function Contact () {
    return(
        <ContactSection id='contact'>
            <ThemeProvider theme={theme}>
                <div className="description-card">
                    <h2>Contact me</h2>
                    <p>There is somenthing you want to discuss? Fill the form and I'll get back to you as soons as possible. 😄</p>
                </div>
                
                <form>
                    <TextField 
                        id="outlined-basic" 
                        label="Name" 
                        variant="outlined"
                        color="primary"
                        
                    />
                    <TextField 
                        id="outlined-basic"
                        label="E-mail" 
                        variant="outlined"
                        color="primary"
                        />
                    <TextField 
                        id="outlined-basic" 
                        label="Message" 
                        variant="outlined"
                        color="primary"           
                        multiline
                        rows={6}
                    />
                    <Button 
                        variant="outlined"
                        color="primary"
                    >
                        Submit
                    </Button>
                </form>
            </ThemeProvider>
        </ContactSection>
    )
}