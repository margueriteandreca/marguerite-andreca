import Header from "./Header"
import navStyles from "../styles/Nav.module.css"
// import Scroll from 'react-scroll'
// const ScrollLink = Scroll.ScrollLink
import {
    AnimatePresence,
    motion,
  } from 'framer-motion';



function NavBar() {

    const onClickHome = () => {
        const anchor = document.getElementById("home")
        anchor.scrollIntoView({ behavior: "smooth", block: "center" })

    }

    const onClickAbout = () => {
        const anchor = document.getElementById("about")
        anchor.scrollIntoView({ behavior: "smooth", block: "center" })

    }

    const onClickProjects = () => {
        const anchor = document.getElementById("projects")
        anchor.scrollIntoView({ behavior: "smooth", block: "center" })

    }

    const onClickContact = () => {
        const anchor = document.getElementById("contact")
        anchor.scrollIntoView({ behavior: "smooth", block: "center" })

    }

    const defaultState = {
        opacity: 0,
        y: -20,
        transitionDuration: 600
    }

    const finalState = {
        opacity: 1,
        y: 0
    }


    return (
        <div id={navStyles.navBar}>
            {/* <div id={navStyles.innerNav}> */}
            <Header />
            <div id={navStyles.menu}>

            <motion.span 
            initial={defaultState}
            animate={finalState}
            className={navStyles.links}
            transition={{ duration: 0.5, delay: 0 }}><div onClick={onClickHome}>01. Home</div></motion.span>

            <motion.span 
            initial={defaultState}
            animate={finalState}
            className={navStyles.links}
            transition={{ duration: 0.5, delay: 0.2 }}><div onClick={onClickAbout}>02. About</div></motion.span>

            <motion.span 
            initial={defaultState}
            animate={finalState}
            className={navStyles.links}
            transition={{ duration: 0.5, delay: 0.4 }}><div onClick={onClickProjects}>03. Projects</div></motion.span>

            <motion.span 
            initial={defaultState}
            animate={finalState}
            className={navStyles.links}
            transition={{ duration: 0.5, delay: 0.6 }}><div onClick={onClickContact}>04. Contact</div></motion.span>
            </div>

            {/* </div> */}


        </div>
    )
}

export default NavBar;