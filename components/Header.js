import headerStyles from "../styles/Header.module.css"
import Image from "next/image";
import avi from "../images/avi.jpeg";

import Typewriter from 'typewriter-effect';

import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })



function Header() {
    return (
        <div id={headerStyles.outer}>
            <div id={headerStyles.inner}>
                <Image src={avi} alt="Photo of Marguerite" height="50" width="50" style={{borderRadius: "50px"}}/>
             
                {/* <Typewriter
                    options={{
                        strings: ["margueriteandreca"],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 200,
                    }}
                    /> */}
                <div id={headerStyles.name} className={montserrat.className}>MargueriteAndreca <span style={{color: "#00FFFF", fontSize: "30px"}}>.</span></div>
            </div>
        </div>
    )
}

export default Header; 