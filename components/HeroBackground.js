import { useEffect } from "react";
import "../styles/Glow.module.css"

const glowEffect = () => {

    // DOM Elemente als Variable nutzbar machen
const GLOW1 = document.querySelector('.glow1');
const GLOW2 = document.querySelector('.glow2');

// Größe des Fensters als Variable nutzbar machen
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

// Bewegung der Maus erkennen und als Variable nutzbar machen
const getMouseMovePos = (event) => {

    // Mouse Koordinaten definieren
    const MOUSE_X = event.clientX;
    const MOUSE_Y = event.clientY;
    console.log(MOUSE_Y + ' : ' + MOUSE_X);

    // Differenz berechnen
    const DELTA_X1 = Math.round((MOUSE_X / WIDTH * 100)/3,0);
    const DELTA_Y1 = Math.round((MOUSE_Y / HEIGHT * 100)/3, 0);
    const DELTA_X2 = Math.round((MOUSE_X / WIDTH * 100)/3,0);
    const DELTA_Y2 = Math.round((MOUSE_Y / HEIGHT * 100)/3, 0);

    // Glow Elemente Bewegen
    GLOW1.style.bottom =  `${DELTA_Y1}%`;
    GLOW1.style.right = `${DELTA_X1}%`;
    GLOW2.style.top =  `${DELTA_Y2}%`;
    GLOW2.style.left = `${DELTA_X2}%`;

};

// Function zum triggern eines Events erstellen
document.onmousemove = getMouseMovePos;

}



function HeroBackground() {
    useEffect(()=> {
        glowEffect();

    }, [])

    
    return (
        <div className="container">
                <div className="glow1"></div>
                <div className="glow2"></div>
            </div>
        
    )
}

export default HeroBackground;