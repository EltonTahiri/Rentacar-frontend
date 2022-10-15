import React from "react";
import Achievements from "../components/Achievements";
import CarsSection from "../components/CarsSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CarsSection />
      <Services />
      <Achievements />
      <Footer />
    </div>
  );
};

export default Home;
