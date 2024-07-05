import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars , faXmark} from '@fortawesome/free-solid-svg-icons'
import { motion } from '../../../../node_modules/framer-motion'


const ToggleButton = ({open , setOpen}) => {
  return (
    <motion.button onClick={() => setOpen(prev => !prev)} initial={{opacity:1}} >
        {
          open && <motion.div initial={{opacity:0}} animate={{opacity:1}} >
          <FontAwesomeIcon icon={faXmark} size='2x'/>
        </motion.div>
        }
        {
          !open && <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}}>
          <FontAwesomeIcon icon={faBars} size='2x'/>
        </motion.div>
        }
    </motion.button>
  )
}

export default ToggleButton