import projectStyles from "../../styles/Projects.module.css"
import ProjectCard from "../ProjectCard";
import FeaturedCard from "../FeaturedCard";
import TravelGram from "../../images/TravelGram.png"
import DrawTogether from "../../images/DrawTogether.png"
import kinta from "../../images/kinta.png"
import vorba from "../../images/VORBA.png"

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
        src: vorba,
        description: "Mobile messaging app"
    },

]

const featuredProject = {
    title: "Kinta",
    github: "https://github.com/margueriteandreca/CapstoneProject",
    src: kinta,
    description: "Mobile social media app feat. scheduling"
}


function Projects() {

    const mappedProjects = currentProjects.map(project => <ProjectCard key={project.title} title={project.title} github={project.github} src={project.src} description={project.description}/>)



    return (
        <div id="projects">
        <div id={projectStyles.projectsScreen}>
        <h1 className="title">My Projects </h1>
        <FeaturedCard title={"Kinta"}/>
            <div id={projectStyles.container}>
            <div id={projectStyles.featuredSmall}>
            <ProjectCard title={featuredProject.title} github={featuredProject.github} src={featuredProject.src} description={featuredProject.description}/>
            </div>
            {mappedProjects}
            
            </div>


        </div>
        </div>
    )
}

export default Projects;