import { motion , useScroll , useTransform } from 'framer-motion'
import './parallax.scss'
import { useRef } from 'react'

const Parallax = ({type}) => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start" , "end start"]
    })

    const yText = useTransform(scrollYProgress , [0 ,1] , ['0%' , '500%']);
    const yBg = useTransform(scrollYProgress , [0,1] , ["0%" , "50%"])

  return (
    <div className='parallax'
    ref={ref}
    style={{
        background : type==="services" ? "linear-gradient(180deg , #111132 , #0c0c1d)" : 
        "linear-gradient(180deg , #111132 , #505064)"
    }}>
        <motion.h1 style={{y : yText}}>{type === 'services' ? "What we Do?" : "What we Did?"}</motion.h1>
        <motion.div  className='mountains'></motion.div>
        <motion.div className='planets' style={{
            backgroundImage : type==='services' ? "url(/planets.png)" : "url(/sun.png)",
            x : yBg
        }}></motion.div>
        <motion.div className='stars' style={{x : yBg}}></motion.div>
    </div>
  )
}

export default Parallax