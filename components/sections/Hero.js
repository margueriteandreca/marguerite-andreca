import heroStyles from "../../styles/Hero.module.css"


function Hero() {
    return (
        <div id="home">
             <main id={heroStyles.nameScreen}>
        <h1 id={heroStyles.name}>
          Marguerite Andreca
        </h1>

        <p id={heroStyles.subtitle}>
          FULL STACK SOFTWARE ENGINEER
        </p>

        <div id={heroStyles.mouse}></div>
        </main>

        


        </div>
    )
}

export default Hero;