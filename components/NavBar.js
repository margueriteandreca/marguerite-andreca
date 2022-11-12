import navStyles from "../styles/Nav.module.css"

function NavBar() {
    return (
        <div id={navStyles.navBar}>
            <div id={navStyles.menu}>
            <span className={navStyles.links}>01. <a>Home</a></span>
            <span className={navStyles.links}>02. <a>About</a></span>
            <span className={navStyles.links}>03. <a>Projects</a></span>
            <span className={navStyles.links}>04. <a>Contact</a></span>
            </div>


        </div>
    )
}

export default NavBar;