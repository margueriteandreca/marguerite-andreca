import { useRef } from "react";
import Image from "next/image";
import projectStyles from "../styles/Projects.module.css"
import kinta from "../images/KINTA.png"
import kintaLogo from "../images/KINTA-logo.png"
import { Navigation, Pagination, Scrollbar, Mousewheel, EffectFade} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import {
    AnimatePresence,
    motion,
    Variants,
    useScroll
  } from 'framer-motion';
  
  const defaultState = {
    opacity: 0,
    y: 20,
    transitionDuration: 300

  }

  const finalState = {
    opacity: 1,
    y: 0
  }

  const variants  = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

 

function FeaturedCard({title, link, src}) {
    const ref = useRef(null)

    const { scrollYProgress: scrollFirstYProgress } = useScroll({
        container: ref
    })
    console.log(scrollFirstYProgress)


    return (
        <div id={projectStyles.featured} ref={ref}>
            {/* <div><p id={projectStyles.title}>Title</p><p id={projectStyles.github}>Github</p></div> */}
            <Swiper
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={50}
                mousewheel={{
                    invert: false
                }}
                pagination={{
                    clickable: true,
                }}
                speed={800}
                // effect={"fade"}
                className={projectStyles.featuredSwiper}
                modules={[Navigation, Pagination, Mousewheel, EffectFade]}>
                <SwiperSlide>
                <div className={projectStyles.swiperSlide}>

                    <motion.div 
                    className={projectStyles.featuredImage}
                    initial={defaultState}
                    // animate={finalState}
                    whileInView={finalState}
                    transition={{ duration: .8, delay: 0}}>
                        <Image src={kinta} alt="Screenshot of Kinta App" height="250" width="250" style={{borderRadius: "20px"}}/>
                    </motion.div>
                    <motion.div
                    className={projectStyles.featuredDescription}
                        initial={{opacity: 0}}
                        // animate={finalState}
                        whileInView={{opacity: 1}}
                        transition={{ duration: 1, delay: 0.5}}>
                        <motion.h2
                        className={projectStyles.featuredTitle}
                        initial={{y: 30, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{ duration: .8, delay: 0.7}}
                        >{title}</motion.h2>
                        <motion.div
                        className={projectStyles.featuredTechnologies}
                        initial={{y: 30, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{ duration: .8, delay: 0.9}}
                        >
                            <span>React Native / Javascript <span style={{color: "gainsboro"}}>•</span></span><span> Django / Python</span>
                        </motion.div>
                        
                        <motion.p
                        initial={{y: 30, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{ duration: .8, delay: 0.9}}
                        className={projectStyles.featuredText}
                        >Kinta is a mobile social media platform social media platform focused on content curation. Developed with content creators and businesses in mind, it allows users to upload, save, or schedule their text or image posts for a later date or time. Users can easily view and modify their drafts and scheduled posts to keep their content organized, and their social media schedule optimized.
                        </motion.p>
                    </motion.div>
                    
                </div>
                
                </SwiperSlide>
                <SwiperSlide>
                <div className={projectStyles.swiperSlide}>
                    <motion.div 
                    className={projectStyles.featuredImage}
                    initial={defaultState}
                    // animate={finalState}
                    whileInView={finalState}
                    
                    transition={{ duration: .5, delay: 0, type: "bounce" }}>
                        <Image src={kinta} alt="Photo of Marguerite" height="250" width="250" style={{borderRadius: "20px"}}/>
                    </motion.div>
                
                <motion.div
                    className={projectStyles.featuredDescription}
                        initial={{opacity: 0}}
                        // animate={finalState}
                        whileInView={{opacity: 1}}
                        transition={{ duration: 1, delay: 0.5}}>
                
                <a href="https://www.loom.com/share/8a800d34d0174fca9a4a1f6c2376ca24" target="_blank">Demo</a>
                </motion.div>
                </div>
                </SwiperSlide>

            </Swiper>
            <div className={projectStyles.featuredStatic} />

        </div>

    )
}

export default FeaturedCard;