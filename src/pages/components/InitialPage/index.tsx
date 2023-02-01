
import { Image, InitialSection, PresentationText } from './style'

export default function InitialPage () {
    return(
        <InitialSection id='initialPage'>
            <PresentationText>
                <h1>
                    Hi, I'm Matheus Almeida. 
                </h1>
                <h4>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </h4>
            </PresentationText>
            <Image src="./images/me.png" alt="Yep, that's me smiling" />
        </InitialSection>
    )
}