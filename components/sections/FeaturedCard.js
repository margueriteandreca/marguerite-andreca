
import Image from "next/image";
import projectStyles from "../../styles/Projects.module.css"
import avi from "../../images/avi.jpeg"
import kinta from "../../images/KINTA.png"


 

function FeaturedCard(title, link, src) {
    return (
        <div id={projectStyles.featured}>
            <Image src={kinta} alt="Photo of Marguerite" height="250" width="450" />
            <div><p id={projectStyles.title}>Title</p><p id={projectStyles.github}>Github</p></div>
            <a href="https://www.loom.com/share/8a800d34d0174fca9a4a1f6c2376ca24" target="_blank">Demo</a>

        </div>

    )
}

export default FeaturedCard;