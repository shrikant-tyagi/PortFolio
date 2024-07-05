import { motion } from '../../../../node_modules/framer-motion';

const Links = ({open ,setOpen}) => {

  const items = [
    "Homepage",
    "Services",
    "Portfolio",
    "Contact",
    "About"
  ];

  const variants = {
    open:{
      transition:{
        staggerChildren:0.1
      }
    },
    closed:{
      transition:{
        staggerChildren:0.05,
        staggerDirection:-1
      }
    }
  }

  const itemvariants = {
    open:{
      y:0
    },
    closed:{
      y:50,
      opacity:0
    }
  }

  return (
    <motion.div className='links' animate={open ? "open" : "closed" } variants={variants}>
      {
        items.map(item =>
          <motion.a href={`#${item}`} key={item}
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          variants={itemvariants}
          >{item}</motion.a>
          )
      }
    </motion.div>
  )
}

export default Links