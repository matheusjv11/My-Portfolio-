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
                <Paragraph title="About Me" className="text">
                    <p>
                        Gratuated in 2021, in <strong>Computer Science</strong> at Federal University of Tocantins, I've been working as Software Developer since. Focused on <strong>Web Development </strong>
                        since 2019, most of the time in Fullstack roles.
                    </p>
                    <p>
                        Currently I live in <strong>Porto Alegre, Brazil</strong>. My family is spread throughout the country, which made me love being in contact with different cultures.  
                    </p>
                    <p>
                        Besides loving music, movies, games and development, I could say that my favorite hobby is <strong>rollerboarding</strong>.    
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