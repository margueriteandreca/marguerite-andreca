import contactStyles from "../../styles/Contact.module.css"
import { ArrowUp } from "react-feather"

function Contact() {
    return (
        <div id="contact">
        <div id={contactStyles.contactScreen}>
            <div id={contactStyles.center}>
            <h1 id={contactStyles.contactTitle}>Get in touch</h1>
            <p>I would love to discuss any opportunities ETC</p>
            <span><a>margueriteandreca@gmail.com</a></span>
            <p>tel: 917 770 5011</p>
            <div id={contactStyles.arrow}>
            <ArrowUp />
            </div>

            </div>
        </div>
        </div>
    )
}

export default Contact;