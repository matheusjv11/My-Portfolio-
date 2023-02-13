import { Project } from "@/types/Project"
import LinkButton from "../LinkButton"
import { ProjectCardWrapper } from "./style"


export default function ProjectCard ({
    title,
    description,
    link,
    github,
    tech,
    banner
}: Project) {
    return(
        <ProjectCardWrapper>
            <div className="project-banner">
                <img src={banner} alt="Project banner preview" />
            </div>
           <div className="project-description">
                <h3>{title}</h3>
                <div className="box">
                    <p>{description}</p>
                </div>
                <div className="tech-row">
                    { tech.map(t => {
                        return <p>{t}</ p> 
                    })}
                </div>
                <div className="links-row">
                    <LinkButton title='Git' url={github}/>
                    <LinkButton title='Live' url={link}/>
                </div>
           </div>
        </ ProjectCardWrapper>
    )
}