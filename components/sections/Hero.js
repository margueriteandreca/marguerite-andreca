import heroStyles from "../../styles/Hero.module.css"
import HeroBackground from "../HeroBackground";
import GlowPractice from "./GlowPractice";


function Hero() {
    return (
      <div id="home"> 
      
        <div id={heroStyles.nameScreen}>
        

          <div id={heroStyles.inner}>
          
            <h1 id={heroStyles.name}>
              Marguerite Andreca
            </h1>
            

            <p id={heroStyles.subtitle}>
              FULL STACK SOFTWARE ENGINEER
            </p>
          </div>
          {/* <GlowPractice /> */}

        <div id={heroStyles.mouse}></div>


        </div>
        </div>
    )
}

export default Hero;