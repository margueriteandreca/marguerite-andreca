import { useEffect, useMemo } from "react";
import glowStyle from "../styles/Glow.module.css"

import {
    AnimatePresence,
    motion,
  } from 'framer-motion';

const glowEffect = () => {
    const GLOW1 = document.querySelector('.glow-first');
    const GLOW2 = document.querySelector('.glow-second');

    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;

    const getMouseMovePos = (event) => {
        const MOUSE_X = event.clientX;
        const MOUSE_Y = event.clientY;
        
        const DELTA_X1 = Math.round((MOUSE_X / WIDTH * 100)/3,0);
        const DELTA_Y1 = Math.round((MOUSE_Y / HEIGHT * 100)/3, 0);
        const DELTA_X2 = Math.round((MOUSE_X / WIDTH * 100)/3,0);
        const DELTA_Y2 = Math.round((MOUSE_Y / HEIGHT * 100)/3, 0);

        GLOW1.style.bottom =  `${DELTA_Y1}%`;
        GLOW1.style.right = `${DELTA_X1}%`;
        GLOW2.style.top =  `${DELTA_Y2}%`;
        GLOW2.style.left = `${DELTA_X2}%`;

    };

    document.onmousemove = getMouseMovePos;

}


function HeroBackground() {
    useEffect(()=> {
        glowEffect();

    }, [])

    const defaultState = {
        opacity: 0,
        // transitionDuration: 600
    
      }
    
      const finalState = {
        opacity: 1
      }

    
    return (
        <motion.div id={glowStyle.container}
        initial={defaultState}
        animate={finalState}
        transition={{ duration: 1.2, delay: 1.2 }} >

            <div id={glowStyle.glowFirst} className="glow-first"></div>
            <div id={glowStyle.glowSecond} className="glow-second"></div>
        </motion.div>
        
    )
}

export default HeroBackground;