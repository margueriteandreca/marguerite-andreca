import projectStyles from "../../styles/Projects.module.css"
import ProjectCard from "./ProjectCard";


function Projects() {
    return (
        <div id="projects">
        <div id={projectStyles.projectsScreen}>
        <h1 className="title">My Projects </h1>
            <div id={projectStyles.container}>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            </div>


        </div>
        </div>
    )
}

export default Projects;