import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import InfoSection from "./components/InfoSection";
import Cards from "./components/Cards";
import ImageCardSection from "./components/ImageCardSection";
import Faculty from "./components/faculty";
import AdmissionBanner from "./components/AdmissionBanner";
import MapContact from "./components/MapContact";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Banner />
      </section>

      <section id="about">
        <InfoSection />
      </section>

      <section id="admissions">
        <AdmissionBanner />
        
      </section>
      <section id="C">
        <Cards />
        
      </section>
      <section id="ic">
        <ImageCardSection />
        
      </section>

     
    


      <section id="faculty">
        <Faculty />
      </section>

      <section id="contact">
        <MapContact />
      </section>

      <Footer />
    </>
  );
}

export default App;
