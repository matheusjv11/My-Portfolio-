
import { Socials } from "./serivice"
import { SocialBarWrap } from "./style"

type Props = {
    fixed?: Boolean
}

export default function SocialBar ({fixed = false}: Props) {
    return(
        <SocialBarWrap className={fixed ? 'fixed' : ''}>
            {Socials.map(social => {
                return  <a href={social.link} target="_blank">
                    <img src={social.icon} alt="Social logo" />
                </a>
            })}
        </SocialBarWrap>
    )
}