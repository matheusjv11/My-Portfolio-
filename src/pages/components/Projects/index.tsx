import ProjectCard from "../Base/ProjectCard"
import { Projects as MyProjects } from "./service"
import { ProjectsSection } from "./style"


export default function Projects () {
    return(
        <ProjectsSection id='projects'>
            <ul>
                { MyProjects.map( project => {
                    return <ProjectCard {...project} />
                })}
            </ul>
        </ProjectsSection>
    )
}