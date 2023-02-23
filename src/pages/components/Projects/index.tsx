import ProjectCard from "../Base/ProjectCard"
import { Projects as MyProjects } from "./service"
import { ProjectsSection } from "./style"
import { SecondTitle } from '@/pages/components/Base/style'

export default function Projects () {
    return(
        <ProjectsSection id='projects'>
            <SecondTitle color="white">Projects</SecondTitle>
            <ul>
                { MyProjects.map( project => {
                    return <ProjectCard {...project} />
                })}
            </ul>
        </ProjectsSection>
    )
}