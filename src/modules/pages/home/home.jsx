import React from "react";
import CarouselPage from "../../components/carousel/carousel";
import Laboratory from "../laboratory/components/carouselLaboratory";
import Project from "../projects/components/caroulselProject";

const Home = () => {
  return (
    <>
      <CarouselPage></CarouselPage>
      <Project></Project>
      <Laboratory></Laboratory>
    </>
  );
};

export default Home;
