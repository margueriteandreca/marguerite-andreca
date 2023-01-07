import projectStyles from "../../styles/Projects.module.css"
import ProjectCard from "../ProjectCard";
import FeaturedCard from "../FeaturedCard";
import TravelGram from "../../images/TravelGram.png"
import DrawTogether from "../../images/DrawTogether.png"

const currentProjects = [
    {
        title: "DrawTogether",
        github: "https://github.com/margueriteandreca/CanvasProjectFE",
        src: DrawTogether,
        description: "Collaborative Drawing Canvas"
    },
    {
        title: "TravelGram",
        github: "https://github.com/margueriteandreca/ReactProject",
        src: TravelGram,
        description: "Travel focused social media"
    },
    {
        title: "Vorba",
        github: "https://github.com/margueriteandreca/Chat-App-FE",
        src: TravelGram,
        description: "Mobile messaging app"
    },

]


function Projects() {

    const mappedProjects = currentProjects.map(project => <ProjectCard title={project.title} github={project.github} src={project.src} description={project.description}/>)



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