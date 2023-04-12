import React from "react";
import Hero from "./components/Hero";
const data = {
  name: "About us",
};
const About = () => {
  return (
    <div>
      <Hero myData={data} />
    </div>
  );
};

export default About;
