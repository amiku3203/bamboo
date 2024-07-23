import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ServicesSection from './components/Services';
 
import BambooChickMaker from './components/Welcome';
import ContactForm from './components/ContactUs';
import KeyServices from './components/KeyServices';
import Statistics from './components/Counter';
import Gallery from './components/Gallery';
import ServiceView from './components/ServicesView';
 

function App() {
  return (
    <>
      <div>
        <Navbar />
        <section id="home"><BambooChickMaker /></section>
        <section id="services"><ServicesSection /></section>
        <section id="contact"><ContactForm /></section>
        <section id="keyservices"><KeyServices /></section>
        <section id="gallery"><Gallery /></section>
        <section id="statistics"><Statistics /></section>
        {/* <ServiceView/> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
