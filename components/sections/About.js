// import { useRef } from "react";
// import { Element } from 'react-scroll'
import aboutStyles from "../../styles/About.module.css"
import Image from "next/image";
import avi from "../../images/avi.jpeg"
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

import { Open_Sans } from '@next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })

function About() {


    return (
        <div id="about">

        <div id={aboutStyles.aboutScreen} title="about">
        <h1 className="title">About Me</h1>
            <div id={aboutStyles.center}>
            <div id={aboutStyles.imageDiv}><Image src={avi} alt="Photo of Marguerite" height="200" width="200" style={{borderRadius: "100px"}}/></div>
            <span id={aboutStyles.aboutText} className={openSans.className}>Hi! My name is Marguerite Andreca and I am a 
            Full Stack Software Engineer based in New York City. At the moment, I am building applications using
            React, React Native, Ruby on Rails and Django. I am currently open to opportunities, both remote and on-site in the NYC area. 
            Feel free to browse my work on <a className={aboutStyles.link} href="https://github.com/margueriteandreca" target="_blank">GitHub </a>and shoot me a question. </span>

            </div>
        </div>
        </div>

    )
}

export default About;

