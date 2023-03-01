import ProjectCard from "../Base/ProjectCard"
import { Projects as MyProjects } from "@/services/projects"
import { ProjectsSection } from "@/styles/projects"
import { SecondTitle } from '@/styles/base'

export default function Projects () {
    return(
        <ProjectsSection id='projects'>
            <SecondTitle className="section__title" color="white">Projects</SecondTitle>
            <ul>
                { MyProjects.map((project, index) => {
                    return <ProjectCard key={index} {...project} />
                })}
            </ul>
        </ProjectsSection>
    )
}