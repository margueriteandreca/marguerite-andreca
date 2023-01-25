import contactStyles from "../../styles/Contact.module.css"
import { ArrowUp } from "react-feather"
import navStyles from "../../styles/Nav.module.css"
import { Open_Sans } from '@next/font/google'
import Footer from "../Footer"
import Image from "next/image";


const openSans = Open_Sans({ subsets: ['latin'] })

function Contact() {

    const onClickHome = () => {
        const anchor = document.getElementById("home")
        anchor.scrollIntoView({ behavior: "smooth", block: "center" })
    }

    return (
        <div id="contact">
        <div id={contactStyles.contactScreen}>
            <div id={contactStyles.center}>
                <h1 id={contactStyles.contactTitle}>Get in touch</h1>
                <p id={contactStyles.mainText} className={openSans.className}>I am currently open to discussing opportunities in full-stack development, both remote and on-site in the NYC area. Feel free to call or shoot me an email, or contact me at any of my socials!</p>
                <span className={navStyles.links + " " + openSans.className}><a href="mailto:someone@example.com">margueriteandreca@gmail.com</a></span>
                <span className={openSans.className}>tel: 917 770 5011</span>
                <div id={contactStyles.arrow} onClick={onClickHome}>
                <svg className={contactStyles.arrowIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up">
                    <line  x1="12" y1="19" x2="12" y2="5">
                    </line>
                    <polyline points="5 12 12 5 19 12">
                    </polyline>
                </svg>
            
                </div>


            </div>
        <Footer />
        </div>
        </div>
    )
}

export default Contact;