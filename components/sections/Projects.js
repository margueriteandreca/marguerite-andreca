import projectStyles from "../../styles/Projects.module.css"
import ProjectCard from "../ProjectCard";
import FeaturedCard from "../FeaturedCard";

const currentProjects = [
    {
        title: "DrawTogether",
        github: "https://github.com/margueriteandreca/CanvasProjectFE",
        description: "Collaborative Drawing Canvas"
    },
    {
        title: "TravelGram",
        github: "https://github.com/margueriteandreca/ReactProject",
        description: "Travel focused social media"
    },
    {
        title: "Vorba",
        github: "https://github.com/margueriteandreca/Chat-App-FE",
        description: "Mobile messaging app"
    },

]


function Projects() {

    const mappedProjects = currentProjects.map(project => <ProjectCard title={project.title} github={project.github} description={project.description}/>)



    return (
        <div id="projects">
        <div id={projectStyles.projectsScreen}>
        <h1 className="title">My Projects </h1>
        <FeaturedCard title={"Kinta"}/>
            <div id={projectStyles.container}>
            {mappedProjects}
            </div>


        </div>
        </div>
    )
}

export default Projects;