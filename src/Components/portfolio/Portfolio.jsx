import { motion ,useScroll , useSpring, useTransform } from 'framer-motion'
import './portfolio.scss'
import { useRef } from 'react'

const items = [
    {
        id:1,
        title:'Real Estate Application',
        img:'/realEsateaApp.png',
        desc:'This Real Estate application is a dynamic and interactive web app built using React, SASS, and React Leaflet. This application allows users to explore and find various beautiful locations on map which they want to buy',
        link:'https://real-estate-application-orcin.vercel.app/'
    },
    {
        id:1,
        title:'Shooping Cart App',
        img:'/shoopingCart.png',
        desc:'UI showcasing an interactive user interface of an e-commerce website from where we can add items to our cart and checkout from there. This App is build using ReactJs which used frameworks like Redux and Used TailwindCSS for styling.',
        link:'https://shopping-cart-app-azure.vercel.app/'

    },
    {
        id:1,
        title:'RazorPay Clone Website',
        img:'/RazorpayClone.png',
        desc:'This Project is to showcase my styling skills and my learnings of TailwindCSS, in this project I have used core HTML5 and TailwindCSS for styling. To see Demo, go checkout the below link.',
        link:'https://razor-pay-clone-khaki.vercel.app/'
    },
    {
        id:1,
        title:'Ed-Tech Platform',
        img:'/EdTech Platform.png',
        desc:'This is EdTech Platform website, it is having both frontEnd and Backend functionalities and this is my Major Project. It contains various features like videoPlayers,Payment Integration,Authorization and Authentication of a user. (This project is under Progress)',
        link:''
    }
]

const Single = ({item}) => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target : ref,
    })

    const yText = useTransform(scrollYProgress , [0 , 1] , [-100 , 100])

    return (
        <section className='container'>
            <motion.div className='wrapper'>
                <div className='imageContainer' ref={ref}>
                <img src={item.img}  alt='' />
                </div>
                <motion.div className='textContainer' style={{y : yText}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button><a href={item.link} target='_blank'>See Demo</a></button>
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