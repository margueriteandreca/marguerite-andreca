
import Image from "next/image";
import projectStyles from "../../styles/Projects.module.css"
import avi from "../../images/avi.jpeg"


 

function FeaturedCard(title, link, src) {
    return (
        <div id={projectStyles.featured}>
            <Image src={avi} alt="Photo of Marguerite" height="200" width="200" />
            <div><p id={projectStyles.title}>Title</p><p id={projectStyles.github}>Github</p></div>

        </div>

    )
}

export default FeaturedCard;