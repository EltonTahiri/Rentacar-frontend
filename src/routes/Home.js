import React from "react";
import CarsSection from "../components/CarsSection";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CarsSection />
    </div>
  );
};

export default Home;
