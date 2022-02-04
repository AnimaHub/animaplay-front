import React, { useEffect, useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import { useHistory } from "react-router";

const Project = () => {
  const [carouselImgProjects, setCarouselImgProjects] = useState([]);
  const history = useHistory();
  const handleClick = (value) => {
    history.push(`/projeto/${value}`);
  };

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(
        `https://raw.githubusercontent.com/MateusCastro2203/jsonRapositorys/master/animaflix/jsonProjetos.json`
      ).then((response) => response.json());
      setCarouselImgProjects(result);
      //console.log("OI", result);
    }
    fetchData();
  }, []);

  const Title = styled.h1`
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap");
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    color: #59329c;
    text-transform: uppercase;
    text-align: center;
  `;
  const Projetos = styled.h2`
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap");
    font-family: Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    text-shadow: 2px 1px 1px #ffffff;
    color: #592c81;
    text-transform: uppercase;
  `;

  const Border = styled.div`
    border-style: none;
  `;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    desktop2: {
      breakpoint: { max: 1200, min: 993 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 993, min: 521 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 521, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Container style={{ textAlign: "center" }}>
      <br></br>
      <Projetos>Projetos</Projetos>
      <Carousel
        swipeable={true}
        showDots
        arrows={false}
        draggable={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={responsive !== "mobile" ? true : false}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-80-px"
      >
        {carouselImgProjects.map((value) => (
          <Border>
            <Card style={{ borderStyle: "none" }}>
              <Card.Body >
                <Card.Title style={{ height: 20, padding: 30 }}>
                  <Title>{value.title}</Title>
                </Card.Title>
                <Card.Img
                  variant="top"
                  src={value.imgLink}
                  style={{
                    width: "18rem", boxShadow: "3px 4px 10px -1px rgb(0 0 0 / 49%)",
                    borderRadius: "4px"
                  }}
                />
              </Card.Body>
              <Card.Footer
                Card
                style={{ borderStyle: "none", backgroundColor: "#ffff" }}
              >
                <div className="d-grid gap-2">
                  <Button
                    style={{ boxShadow: "3px 4px 10px -1px rgb(0 0 0 / 49%)" }}
                    variant="primary"
                    onClick={() => handleClick(value.id)}
                  >
                    Saiba mais
                  </Button>
                </div>
              </Card.Footer>
            </Card>
            <br></br>
          </Border>
        ))}
      </Carousel>
    </Container>
  );
};

export default Project;
