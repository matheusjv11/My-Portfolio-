
import { Image, InitialSection, PresentationText } from '@/styles/initialPage'
import SocialBar from "../Base/SocialBar"

export default function InitialPage () {
    return(
        <InitialSection id='initialPage'>
            <SocialBar fixed={true} />
            <PresentationText>
                <h1>Hi, <br />  I am Matheus Almeida.</h1>
                <h3>Software Developer</h3>
                <p>Passionate for web development, I am a software developer who loves creating optimized and inclusive frontend. Here you will find a little of who I am and what I do.</p>
            </PresentationText>
            <Image src="./images/me.png" alt="Yep, that's me smiling" />
        </InitialSection>
    )
}