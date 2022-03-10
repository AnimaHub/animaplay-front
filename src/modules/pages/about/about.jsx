import React from "react";
import {Container, Card, Button} from "react-bootstrap";
import styled from "styled-components";
import conceito from '../../../assets/img/labs-min-small.png';

const AboutPage = (value) => {

    const About = styled.div`
      padding: 2rem 0;
      min-height: 100vh;
      width: 100%;
    `;

    const Image = styled.img`
      height: 100%
    `

    return (
        <About
            style={{
                backgroundImage:
                    `linear-gradient(
                    rgba(0, 0, 0, 0.1),
                    rgba(0, 0, 0, 0.1)
                    ),
                    url(${conceito})`,
                backgroundSize: 'cover',
            }}
        >
            <Container>
                <Card
                    style={{
                        fontFamily: 'Ubuntu, sans-serif',
                        fontStyle: 'normal',
                        margin: '3rem auto 0 auto',
                        maxWidth: '80%'
                    }}
                >
                    <Card.Header as="h5">About</Card.Header>
                    <Card.Body>
                        <Card.Title>Title</Card.Title>
                        <Card.Text style={{padding: '2rem 1rem'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                            eleifend arcu a massa fermentum blandit. Duis et vulputate ipsum.
                            Quisque erat ipsum, ullamcorper a rutrum eget, posuere sit amet magna.
                            In hac habitasse platea dictumst. Maecenas ac hendrerit erat, eget
                            condimentum elit. Donec quis libero eu lorem semper dignissim. Nunc
                            nunc lorem, iaculis sed sollicitudin eget, vehicula id libero. Quisque
                            lectus elit, pulvinar suscipit mauris eget, elementum vehicula nulla.
                            Orci varius natoque penatibus et magnis dis parturient montes,
                            nascetur ridiculus mus. Fusce mauris lorem, vulputate nec ipsum sit
                            amet, elementum iaculis lectus. Duis in arcu iaculis sem placerat
                            pulvinar et sit amet elit. Proin eget eleifend diam. Vivamus ut
                            vehicula erat. Vivamus vitae quam et magna interdum scelerisque.
                            Nullam ut dui eu metus vehicula pretium sit amet consequat turpis.
                            Proin vitae ante consequat, mollis elit sed, tincidunt libero.
                            Maecenas vel leo in nibh congue mattis et vel magna. Phasellus id erat
                            viverra, sodales leo at, posuere dolor. In hac habitasse platea
                            dictumst. Etiam tempus porta semper. Nulla facilisi. Cras eget felis
                            eget orci posuere dignissim et sed sapien. Maecenas luctus nisl vitae
                            viverra finibus. Duis pretium odio et elit sodales, ut dapibus metus
                            suscipit. Praesent pulvinar augue nisl, sed iaculis risus pellentesque
                            ut. Nulla magna ipsum, ullamcorper in blandit sed, fermentum id
                            sapien. Pellentesque habitant morbi tristique senectus et netus et
                            malesuada fames ac turpis egestas. Fusce gravida elit sit amet diam
                            rutrum porttitor. Pellentesque accumsan luctus malesuada. Integer
                            eleifend, ex in pulvinar egestas, leo mauris pharetra leo, sed
                            facilisis ex lorem at mauris. Maecenas vitae erat rutrum, euismod
                            mauris et, aliquet arcu. Cras posuere quam sagittis risus scelerisque
                            consequat. Curabitur tortor est, lacinia non risus non, tincidunt
                            volutpat velit. Sed posuere nunc odio, at placerat felis euismod vel.
                            Etiam pulvinar libero malesuada, blandit tellus id, consequat leo.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </About>
    );
};


export default AboutPage;