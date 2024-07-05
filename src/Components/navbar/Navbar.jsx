import './Navbar.scss'
import {motion} from 'framer-motion'
import Sidebar from '../sidebar/Sidebar'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Sidebar />
        <div className='wrapper'>
            <motion.span className='name'
                initial={{opacity:0,scale:0.5}}
                animate={{opacity:1,scale:1}}
                transition={{duration:1}}
            >
                Shrikant Tyagi
            </motion.span>
            <motion.div 
                initial={{opacity:0,scale:0.5}}
                animate={{opacity:1,scale:1}}
                transition={{duration:1}}
                className='social'>
                <a href='#'><img src='/facebook.png'/></a>
                <a href='#'><img src='/instagram.png'/></a>
                <a href='#'><img src='/youtube.png'/></a>
            </motion.div>
        </div>
    </div>
  )
}

export default Navbar