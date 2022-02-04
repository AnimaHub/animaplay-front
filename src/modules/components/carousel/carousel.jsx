import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Carousel, Container, Image } from "react-bootstrap";

const CarouselPage = () => {
  const TitleCarousel = styled.text`
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap");
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    text-shadow: 1px 1px 1px black;
    color: #ffffff;
    text-transform: uppercase;
    text-decoration: underline;
  `;
  const DescriptionCarousel = styled.text`
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap");
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    text-shadow: 1px 1px 1px black;
    color: #ffffff;
    text-transform: uppercase;
  `;

  //https://raw.githubusercontent.com/MateusCastro2203/jsonRapositorys/master/animaflix/jsonCarousel.json

  const [carouselData, SetCarouselData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(
        `https://raw.githubusercontent.com/MateusCastro2203/jsonRapositorys/master/animaflix/jsonCarousel.json`
      ).then((response) => response.json());
      SetCarouselData(result);
    }
    fetchData();
  }, []);

  return (
    <Container>
      <br></br>
      <Carousel className="mt-4">
        {carouselData.map((value, index) => (
          <Carousel.Item style={{ height: 400 }}>
            <Image
              className="d-block"
              src={value.imgLink}
              alt="First slide"
              width="100%"
              height="100%"
            />
            <Carousel.Caption>
              <TitleCarousel> {value.title} </TitleCarousel>
              <br></br>
              <DescriptionCarousel>{value.description}</DescriptionCarousel>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default CarouselPage;
