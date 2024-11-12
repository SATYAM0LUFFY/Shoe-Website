import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import HowItIsDone from './Components/HowItIsDone';
import AboutUs from './Components/AboutUs';
import Review from './Components/Review';
import Contact from './Components/Contact';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(0);
  return (
    <div className="bg-[#000000] w-full h-full text-white App overflow-x-hidden">
      <Navbar show = {show} setShow= {setShow} />
      <Hero  />
      <HowItIsDone />
      <AboutUs />
      <Review />
      <Contact />
    </div>
  );
}

export default App;
