
import Image from "next/image";
import projectStyles from "../styles/Projects.module.css"
import avi from "../images/avi.jpeg"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


 

function ProjectCard(title, link, src) {
    return (
        <div className={projectStyles.card}>
            <div className={projectStyles.image}>
            <Image src={avi} alt="Photo of Marguerite" height="200" width="200" />
            </div>
            <div><p id={projectStyles.title}>Title</p><p id={projectStyles.github}>Github</p></div>

        </div>

    )
}

export default ProjectCard; 