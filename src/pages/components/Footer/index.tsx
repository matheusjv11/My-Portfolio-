
import { FooterWrap } from "@/styles/footer"
import SocialBar from "../Base/SocialBar"

export default function Footer () {
    return(
        <FooterWrap>
            <main>
                <div className="about">
                    <h3>Matheus Almeida</h3>
                    <p>Passionate for web development, I am a software developer who loves creating optimized and inclusive frontend. Here you will find a little of who I am and what I do.</p>
                </div>
                <div>
                    <h3>Social</h3>
                    <SocialBar />
                </div>
            </main>
            <p className="finalCredits">Made by Matheus Almeida</p>
        </FooterWrap>
    )
}