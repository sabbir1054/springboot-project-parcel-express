import React from "react";
import Hero from "../components/Hero";
import OurFeatures from "../components/OurFeatures";
import Partner from "../components/Partner";

const HomePage = () => {
  return (
    <div style={{ width: "100%" }}>
      <Hero />
      <Partner />
      <OurFeatures />
    </div>
  );
};

export default HomePage;
