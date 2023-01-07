
import Image from "next/image";
import projectStyles from "../styles/Projects.module.css"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


 

function ProjectCard({title, github, src, description}) {
    return (
        <div className={projectStyles.card}>
            <div className={projectStyles.image}>
            <Image src={src} alt="Project Thumbnail" height="300" width="300" style={{
                borderTopLeftRadius: "10px", borderTopRightRadius: "10px"}}/>
            </div>
            <div className={projectStyles.titleContainer}>
                <p className={projectStyles.title}>{title}</p>
                <a href={github} className={projectStyles.github}>Github</a>
                
            </div>
            <p className={projectStyles.description}>{description}</p>

        </div>

    )
}

export default ProjectCard; 