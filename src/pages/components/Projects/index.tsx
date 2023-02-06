import { ProjectsSection } from "./style"


export default function InitialPage () {
    return(
        <ProjectsSection id='projects'>
           <img src="" alt="" />
           <div>
            <h3>Project Title</h3>
            <div>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </div>
            <p>vue, typescript</p>
            <div>
                <a href="/">github</a>
                <a href="/">website</a>
            </div>
           </div>
        </ProjectsSection>
    )
}