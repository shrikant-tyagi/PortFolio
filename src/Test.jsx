import './Test.scss'
import {motion} from 'framer-motion'

const Test = () => {
  return (
    <motion.div className='wrapper'
    initial={{opacity:1 , scale:0.5}}
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      y:200
    }}
    transition={{duration:5}}
  />
  )
}

export default Test