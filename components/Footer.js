import footerStyles from "../styles/Footer.module.css"
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

function Footer() {

    return (
        <motion.div id={footerStyles.footer}
        initial={defaultState}
        animate={finalState}
        transition={{ duration: 0.5, delay: .8 }}>
            <a href="https://www.linkedin.com/in/marguerite-andreca/" className={sidebarStyles.links} target="_blank" ><Linkedin /></a>
            <a href="https://www.instagram.com/margueriteandreca/" className={sidebarStyles.links} target="_blank" ><Instagram /></a>
            <a href="https://github.com/margueriteandreca" className={sidebarStyles.links} target="_blank" ><GitHub /></a>
            <a href="https://medium.com/@margueriteandreca" className={sidebarStyles.links} target="_blank" ><Edit /></a>
        </motion.div>
    )
}

export default Footer;