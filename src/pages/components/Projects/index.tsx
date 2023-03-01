import ProjectCard from "../Base/ProjectCard"
import { Projects as MyProjects } from "@/services/projects"
import { ProjectsSection } from "@/styles/projects"
import { SecondTitle } from '@/styles/base'

export default function Projects () {
    console.log(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID)
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