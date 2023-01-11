import { useEffect } from "react";
import glowStyle from "../styles/Glow.module.css"

const glowEffect = () => {
    const GLOW1 = document.querySelector('.glow-first');
    const GLOW2 = document.querySelector('.glow-second');

    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;

    const getMouseMovePos = (event) => {
        const MOUSE_X = event.clientX;
        const MOUSE_Y = event.clientY;
        console.log(MOUSE_Y + ' : ' + MOUSE_X);

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

    
    return (
        <div id={glowStyle.container} >
                <div id={glowStyle.glowFirst} className="glow-first"></div>
                <div id={glowStyle.glowSecond} className="glow-second"></div>
            </div>
        
    )
}

export default HeroBackground;