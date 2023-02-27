
import { Socials } from "@/services/socialBar"
import { SocialBarWrap } from "@/styles/socialBar"

type Props = {
    fixed?: Boolean
}

export default function SocialBar ({fixed = false}: Props) {
    return(
        <>
            <SocialBarWrap className={fixed ? 'fixed' : ''}>
                {Socials.map((social, index) => {
                    return  <a key={index} href={social.link} target="_blank" rel="noreferrer">
                        <img src={social.icon} alt="Social logo" />
                    </a>
                })}
            </SocialBarWrap>
        </>
    )
}