import heroStyles from "../../styles/Hero.module.css"
import HeroBackground from "../HeroBackground";
import {
  AnimatePresence,
  motion,
} from 'framer-motion';

function Hero() {

  const defaultState = {
    opacity: 0,
    y: 20,
    transitionDuration: 600

  }

  const finalState = {
    opacity: 1,
    y: 0
  }


    return (
      <div id="home"> 
      
        <div id={heroStyles.nameScreen}>


      <HeroBackground />

          <div id={heroStyles.inner}>
            <motion.h1
            className={heroStyles.name}
            initial={defaultState}
            animate={finalState}
            transition={{ duration: 0.5, delay: 0.8 }}>

            Marguerite Andreca
            </motion.h1>
            <motion.p className={heroStyles.subtitle}
             initial={defaultState}
             animate={finalState}
             transition={{ duration: 0.5, delay: 1 }}>           
              FULL STACK SOFTWARE ENGINEER
            </motion.p>
          </div>
          

        <motion.div id={heroStyles.mouse}
        initial={defaultState}
        animate={finalState}
        transition={{ duration: 0.8, delay: 1.2 }}></motion.div>


        </div>
        </div>
    )
}

export default Hero;