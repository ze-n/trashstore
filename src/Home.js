import React from "react";
import styled from "styled-components";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
const data = {
  name: "Trash Store",
};
const Home = () => {
  return (
    <>
      <Hero myData={data} />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
