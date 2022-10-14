import React from "react";
import CarsSection from "../components/CarsSection";
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
    </div>
  );
};

export default Home;
