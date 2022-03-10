import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Carousel, Container, Image} from "react-bootstrap";

const CarouselPage = () => {
    const TitleCarousel = styled.text`
      font-family: 'Ubuntu', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      color: #ffffff;
      text-transform: uppercase;
    `;
    const DescriptionCarousel = styled.text`
      font-family: 'Ubuntu', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      color: #ffffff;
      text-transform: uppercase;
    `;

    //https://raw.githubusercontent.com/MateusCastro2203/jsonRapositorys/master/animaflix/jsonCarousel.json

    const [carouselData, SetCarouselData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const result = await fetch(
                `https://gist.githubusercontent.com/Leo3965/9d3bf8a19fe61b9fb6451ec2fadef3b8/raw/b0e88ae5794d43f8b6d32a243c4862c8f19d60ba/animalabmodal.json`
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
                    <Carousel.Item style={{height: '400px'}}>
                        <Image
                            className="d-block"
                            src={value.imgLink}
                            style={{borderRadius: '10px'}}
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
