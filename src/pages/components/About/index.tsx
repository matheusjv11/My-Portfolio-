import { AboutSection } from "./style"
import { Paragraph } from "@/pages/components/Base/Paragraph/index"

type HardSkill = {
    logo: string,
    name: string
}

const hardSkills: Array<String> = [
    'Vue',
    'React',
    'TypeScript',
    'PHP',
    'Angular',
    'GIT',
    'Django',
    'SQL Basics',
    'HTML/CSS'
]

export default function InitialPage () {
    return(
        <AboutSection id='about' className='home'>
            <div className="myself__paragraph">
                <Paragraph title="About Me">
                    <p>
                        Gratuated in 2021 in computer science at Federal University of Tocantins, Brazil. I've been working as Software Developer since, focused on Web Development. 
                        Altough I've worked in backend, creating components, funcionatilituis or even  optmizing the frontend that makes me happier.
                    </p>
                </Paragraph>
                <Paragraph title="HardSkills">
                    <div className="skill__container">
                        {hardSkills.map(skill => {
                            return <span className="skill__badge">{skill}</span>
                        })}
                    </div>
                </Paragraph>
            </div>
            <div>
                <h3>Work Experience</h3>
                <div>
                    Here will be some of my experiencies
                </div>
            </div>
        </AboutSection>
    )
}