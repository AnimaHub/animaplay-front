import React, {useContext} from "react";
import CarouselPage from "../../components/carousel/carousel";
import Project from "../projects/components/caroulselProject";
import Laboratory from "../laboratory/components/carouselLaboratory";
import {Redirect} from "react-router-dom";
import {LoginContext} from "../../../helper/Context";


const AnimaPage = () => {
    const {user, setUser} = useContext(LoginContext);

    if (false) {
        return (<Redirect to="/" />);
    }

    return (
        <>
            <CarouselPage></CarouselPage>
            <Project></Project>
            <Laboratory></Laboratory>
        </>
    );
}

export default AnimaPage