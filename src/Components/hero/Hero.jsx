import { animate, motion, stagger } from 'framer-motion'
import './hero.scss'

const textVariants = {
    initial:{
        x:-500,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.2
        }
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:1,
            repeat:Infinity,
            repeatType:'mirror'
        }
    }
}

const sliderVaariants = {
    initial:{
        x:0
    },
    animate:{
        x:'-220%',
        transition:{
            duration:20,
            repeat:Infinity,
            // type:'mirror'
        }
    }
}

const Hero = () => {
  return (
    <motion.div className='hero' animate='animate' initial='initial' variants={textVariants}>
        <motion.div className='wrapper' variants={textVariants}>
            <motion.div className='textContainer' variants={textVariants}>
                <motion.h2 variants={textVariants}>Shrikant Tyagi</motion.h2>
                <motion.h1 variants={textVariants}>Web Developer and ML scientist</motion.h1>
                <motion.div className='buttons' variants={textVariants}>
                    <motion.button variants={textVariants}>See the latest work</motion.button>
                    <motion.button variants={textVariants}>Contact Me</motion.button>
                </motion.div>
                <motion.img src='scroll.png' alt='' initial={{opacity:1}}
                animate='scrollButton' variants={textVariants}/>

                <motion.div className='slidingTextContainer' variants={sliderVaariants} initial='initial' animate='animate'>
                    Developer , Engineer , Designer
                </motion.div>
            </motion.div>
        </motion.div>
        <div className='imageContainer'>
            <img src='hero.png' alt=''/>
        </div>
    </motion.div>
  )
}

export default Hero