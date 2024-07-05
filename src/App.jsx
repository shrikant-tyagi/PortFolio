import Navbar from './Components/navbar/Navbar';
import './app.scss'
import Hero from './Components/hero/Hero';
import Parallax from './Components/parallax/Parallax';
import Services from './Components/services/Services';
import Portfolio from './Components/portfolio/Portfolio';
import Contact from './Components/contact/Contact';

const App = () => {
  return <div>
    <section id='Homepage'>
      <Navbar />
      <Hero />
    </section>

    {/* <section id=''>
      <Parallax type='services'/>
    </section> */}

    {/* <section id='Services'>
      <Services />
    </section> */}

    <section>
      <Parallax />
    </section>

    <Portfolio />
    
    <section id='Contact'>
      <Contact />
    </section>
  </div>;
};

export default App;