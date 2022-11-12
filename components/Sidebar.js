import sidebarStyles from "../styles/Sidebar.module.css"
import { Linkedin } from "react-feather"
import { GitHub } from "react-feather"
import { Edit } from "react-feather"
import { Instagram } from "react-feather"


function Sidebar() {
    return (
        <div id={sidebarStyles.sidebar}>
            <a href="https://www.linkedin.com/in/marguerite-andreca/" className={sidebarStyles.links}><Linkedin /></a>
            <a href="https://www.instagram.com/margueriteandreca/" className={sidebarStyles.links}><Instagram /></a>
            <a href="https://github.com/margueriteandreca" className={sidebarStyles.links}><GitHub /></a>
            <a href="https://medium.com/@margueriteandreca" className={sidebarStyles.links}><Edit /></a>
        </div>
    )
}

export default Sidebar;