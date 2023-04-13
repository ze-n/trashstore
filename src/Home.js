import React from "react";
import styled from "styled-components";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeatureProduct from "./components/FeaturedProduct";
const data = {
  name: "Trash Store",
};
const Home = () => {
  return (
    <>
      <Hero myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
