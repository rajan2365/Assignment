import React, { useState } from 'react'
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import HowitWorks from '../Components/HowitWork';
import WhyChooseUs from '../Components/WhyChooseUs';
import Testimonials from '../Components/Testimonials';
import ContactForm from '../Components/ContactForm';
// import footer from '../Footer/footer';
import Footer from '../Components/Footer';
import Chatwidget from '../Components/Chatwidget';

export const Home = () => {
    const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}>
        <Navbar darkMode={darkMode} toggleDarkMode={()=>setDarkMode(!darkMode)}/>
        <Hero/>
        <HowitWorks/>
        <WhyChooseUs/>
        <Testimonials/>
        <ContactForm/>
        {/* <footer/> */}
        <Chatwidget/>
        <Footer/>
    </div>
  )
}
