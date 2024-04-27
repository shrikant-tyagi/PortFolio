import { motion ,useScroll , useSpring, useTransform } from 'framer-motion'
import './portfolio.scss'
import { useRef } from 'react'

const items = [
    {
        id:1,
        title:'React Commerce',
        img:'https://images.pexels.com/photos/18060087/pexels-photo-18060087/free-photo-of-fox-standing-on-pile-of-wood.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ex dui, maximus vel purus nec, rhoncus laoreet ante.'
    },
    {
        id:1,
        title:'Next.js Commerce',
        img:'https://images.pexels.com/photos/21771197/pexels-photo-21771197/free-photo-of-old-citroen-2cv-stationne-a-la-place-de-la-concorde-paris-france-antique-d-orange-citroen-2cv-est-une-voiture-produite-francais-construit-de-1948-a-1990-avec-un-regard-non-conventionnel.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ex dui, maximus vel purus nec, rhoncus laoreet ante.'
    },
    {
        id:1,
        title:'Vanilla JS App',
        img:'https://images.pexels.com/photos/18676549/pexels-photo-18676549/free-photo-of-couple-riding-horses-on-beach.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ex dui, maximus vel purus nec, rhoncus laoreet ante.'
    },
    {
        id:1,
        title:'Music App',
        img:'https://images.pexels.com/photos/12190795/pexels-photo-12190795.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ex dui, maximus vel purus nec, rhoncus laoreet ante.'
    }
]

const Single = ({item}) => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target : ref,
    })

    const yText = useTransform(scrollYProgress , [0 , 1] , [-100 , 300])

    return (
        <section className='container'>
            <motion.div className='wrapper'>
                <div className='imageContainer' ref={ref}>
                    <img src={item.img} alt='' />
                </div>
                <motion.div className='textContainer' style={{y : yText}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
                </motion.div>
            </motion.div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["end end" , "start start"]
    })

    const scaleX = useSpring(scrollYProgress , {
        stiffness:500,
        damping:30
    })

  return (
    <div className='Portfolio' ref={ref}>
        <div className='progress'>
            <h1>Featured Works</h1>
            <motion.div className='progressBar' style={{scaleX}}></motion.div>
        </div>
        {
            items.map(item => {
                return <Single item={item} key={item.id} />
            })
        }
    </div>
  )
}

export default Portfolio