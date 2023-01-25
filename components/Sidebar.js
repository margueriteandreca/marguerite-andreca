import sidebarStyles from "../styles/Sidebar.module.css"
import { Linkedin } from "react-feather"
import { GitHub } from "react-feather"
import { Edit } from "react-feather"
import { Instagram } from "react-feather"
import {
    AnimatePresence,
    motion,
  } from 'framer-motion';

const defaultState = {
    opacity: 0,
    transitionDuration: 800
}

const finalState = {
    opacity: 1
}

function Sidebar() {

    return (
        <motion.div id={sidebarStyles.sidebar}
        initial={defaultState}
        animate={finalState}
        transition={{ duration: 0.5, delay: .8 }}>
            <a href="https://www.linkedin.com/in/marguerite-andreca/" className={sidebarStyles.links} target="_blank" rel="noopener noreferrer"><Linkedin /></a>
            <a href="https://www.instagram.com/margueriteandreca/" className={sidebarStyles.links} target="_blank" rel="noopener noreferrer"><Instagram /></a>
            <a href="https://github.com/margueriteandreca" className={sidebarStyles.links} target="_blank" rel="noopener noreferrer"><GitHub /></a>
            <a href="https://medium.com/@margueriteandreca" className={sidebarStyles.links} target="_blank" rel="noopener noreferrer"><Edit /></a>
        </motion.div>
    )
}

export default Sidebar;