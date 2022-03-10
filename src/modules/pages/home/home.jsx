import React from "react";
import CarouselPage from "../../components/carousel/carousel";
import Laboratory from "../laboratory/components/carouselLaboratory";
import Project from "../projects/components/caroulselProject";
import conceito from '../../../assets/img/labs-min-small.png';

const Home = () => {
    return (
        <div
            style={{
                paddingBottom: '2rem',
                backgroundImage:
                    `linear-gradient(
                    rgba(0, 0, 0, 0.1),
                    rgba(0, 0, 0, 0.1)
                    ),
                    url(${conceito})`,
                backgroundSize: 'cover',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.4rem',
            }}
        >
            <CarouselPage></CarouselPage>
            <Project></Project>
            <Laboratory></Laboratory>
        </div>
    );
};

export default Home;
