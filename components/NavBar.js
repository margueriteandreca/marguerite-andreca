import Header from "./Header"
import navStyles from "../styles/Nav.module.css"
// import Scroll from 'react-scroll'
// const ScrollLink = Scroll.ScrollLink

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

    return (
        <div id={navStyles.navBar}>
            <Header />
            <div id={navStyles.menu}>
            <span className={navStyles.links}><div onClick={onClickHome}>01. Home</div></span>  
            <span className={navStyles.links}><div onClick={onClickAbout}>02. About</div></span>
            <span className={navStyles.links}><div onClick={onClickProjects}>03. Projects</div></span>
            <span className={navStyles.links}><div onClick={onClickContact}>04. Contact</div></span>
            </div>


        </div>
    )
}

export default NavBar;