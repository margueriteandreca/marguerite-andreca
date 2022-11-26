// import { useRef } from "react";
// import { Element } from 'react-scroll'
import aboutStyles from "../../styles/About.module.css"
import Image from "next/image";
import avi from "../../images/avi.jpeg"



function About() {


    return (
        <div id="about">

        <div id={aboutStyles.aboutScreen} title="about">
        <h1 className="title">About Me</h1>
            <div id={aboutStyles.center}>
            <div id={aboutStyles.imageDiv}><Image src={avi} alt="Photo of Marguerite" height="200" width="200" style={{borderRadius: "100px"}}/></div>
            <p id={aboutStyles.aboutText}>Hi! My name is Marguerite Andreca and I am a 
            Full Stack Software Engineer based in New York City. </p>
            </div>
        </div>
        </div>

    )
}

export default About;

