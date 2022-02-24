import React, {useEffect, useState} from "react";
import {Card, Container, Button} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import {useHistory} from "react-router";

const Project = () => {
    const [carouselImgProjects, setCarouselImgProjects] = useState([]);
    const history = useHistory();
    const handleClick = (value) => {
        history.push(`/projeto/${value}`);
    };

    useEffect(() => {
        async function fetchData() {
            const result = await fetch(
                `https://gist.githubusercontent.com/Leo3965/3b7a05cc056a843aaa2d45392988692a/raw/406f98385b47a106b8fb751f173c9226ab2d4bd3/animalabprojects.json`
            ).then((response) => response.json());
            setCarouselImgProjects(result);
        }

        fetchData();
    }, []);

    const Content = styled.div`
      padding: 1rem 1rem 2rem 1rem;
      background-color: white;
      border-radius: 10px;
    `;

    const Title = styled.h1`
      font-family: "Ubuntu", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      color: #59329c;
      text-transform: uppercase;
      text-align: center;
    `;
    const Projetos = styled.h2`
      font-family: "Ubuntu", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 2rem;
      color: #ffffff;
      text-transform: uppercase;
    `;

    const Border = styled.div`
      border-style: none;
    `;

    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1200},
            items: 4,
            slidesToSlide: 1, // optional, default to 1.
        },
        desktop2: {
            breakpoint: {max: 1200, min: 993},
            items: 3,
            slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
            breakpoint: {max: 993, min: 521},
            items: 2,
            slidesToSlide: 1, // optional, default to 1.
        },
        mobile: {
            breakpoint: {max: 521, min: 0},
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };

    return (
        <Container style={{textAlign: "center"}}>
            <Projetos>Projetos</Projetos>

            <Content>
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
                            <Card style={{borderStyle: "none", marginBottom: '3rem'}}>
                                <Card.Body>
                                    <Card.Title style={{height: 20, padding: 30, marginBottom: 16}}>
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
                                    style={{borderStyle: "none", backgroundColor: "#ffff"}}
                                >
                                    <div className="d-grid gap-2">
                                        <Button
                                            style={{}}
                                            variant="dark"
                                            onClick={() => handleClick(value.id)}
                                        >
                                            Saiba mais
                                        </Button>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Border>
                    ))}
                </Carousel>
            </Content>
        </Container>
    );
};

export default Project;
