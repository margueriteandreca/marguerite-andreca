import navstyles from "../styles/Nav.module.css"

function NavBar() {
    return (
        <div id={navstyles.navBar}>
            <div id={navstyles.menu}>
            <span>01. <a>Home</a></span>
            <span>02. <a>About</a></span>
            <span>03. <a>Projects</a></span>
            <span>04. <a>Contact</a></span>
            </div>


        </div>
    )
}

export default NavBar;