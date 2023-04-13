import React from "react";
import Hero from "./components/Hero";

import { useProductContext } from "./context/productContext";

const data = {
  name: "About us",
};
const About = () => {
  const test = useProductContext();
  return (
    <div>
      {test}
      <Hero myData={data} />
    </div>
  );
};

export default About;
