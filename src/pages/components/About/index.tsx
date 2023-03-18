import React from 'react'
import { AboutSection } from "@/styles/about"
import { experiences, hardSkills } from '@/services/about'
import Paragraph from "@/pages/components/Base/Paragraph"
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
                        Gratuated in 2021, in <strong>Computer Science</strong> at Federal University of Tocantins, I have been working as Software Developer since. Focused on <strong>Web Development </strong>
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
                        {hardSkills.map((skill, i) => {
                            return <span key={i} className="skill__badge">{skill}</span>
                        })} 
                    </div>
                </Paragraph>
            </div>
            <div>
                <Paragraph title="Work Experience">
                    {/* 
                    // @ts-ignore */}
                    <Carousel breakPoints={breakPoints} itemPadding={[1, 5]} > 
                        {experiences.map((xp, i) => (
                            <ExperienceCard key={i} {...xp} />
                        ))}
                    </Carousel>
                </Paragraph>
            </div>
        </AboutSection>
    )
}