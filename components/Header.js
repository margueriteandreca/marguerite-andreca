import headerStyles from "../styles/Header.module.css"
import Image from "next/image";
import avi from "../images/avi.jpeg";
import Typewriter from 'typewriter-effect';
import { Montserrat } from '@next/font/google'
import {
    AnimatePresence,
    motion,
  } from 'framer-motion';

const defaultState = {
    opacity: 0,
    transitionDuration: 800
}

const finalState = {
    opacity: 1
}

const montserrat = Montserrat({ subsets: ['latin'] })



function Header() {
    return (
        <motion.div 
        id={headerStyles.outer}
        initial={defaultState}
        animate={finalState}
        transition={{ duration: 0.5, delay: .8 }}
        >
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
                {/* <div id={headerStyles.name} className={montserrat.className}>MargueriteAndreca <span style={{color: "#00FFFF", fontSize: "30px"}}>.</span></div> */}
            </div>
        </motion.div>
    )
}

export default Header; 