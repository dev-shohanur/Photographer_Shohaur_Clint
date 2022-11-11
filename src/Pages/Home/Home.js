import React from 'react';
import About from '../../components/Home/About';
import Services from '../../components/Home/Services';
import Slider from '../../components/Home/Slider';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;