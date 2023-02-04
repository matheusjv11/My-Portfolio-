import { AboutSection } from "./style"
import { experiences, hardSkills } from './service'
import { Paragraph } from "@/pages/components/Base/Paragraph/index"
import ExperienceCard from "../Base/ExperienceCard"
import Carousel from "react-elastic-carousel";

const breakPoints = [
    { width: 2, itemsToShow: 1 },
  ];

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
                <Paragraph title="Work Experience">
                    <Carousel breakPoints={breakPoints}>
                        {experiences.map((xp) => {
                            return <ExperienceCard {...xp} />
                        })}
                    </Carousel>
                </Paragraph>
            </div>
        </AboutSection>
    )
}