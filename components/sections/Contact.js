import contactStyles from "../../styles/Contact.module.css"
import { ArrowUp } from "react-feather"
import navStyles from "../../styles/Nav.module.css"
import { Open_Sans } from '@next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })

function Contact() {
    return (
        <div id="contact">
        <div id={contactStyles.contactScreen}>
            <div id={contactStyles.center}>
            <h1 id={contactStyles.contactTitle}>Get in touch</h1>
            <p id={contactStyles.mainText} className={openSans.className}>I am currently open to discussing opportunities in front-end and full-stack development. Feel free to call or shoot me an email, or contact me at any of my socials!</p>
            <span className={navStyles.links + " " + openSans.className}><a href="mailto:someone@example.com">margueriteandreca@gmail.com</a></span>
            <p className={openSans.className}>tel: 917 770 5011</p>
            <div id={contactStyles.arrow}>
            <ArrowUp />
            </div>

            </div>
        </div>
        </div>
    )
}

export default Contact;