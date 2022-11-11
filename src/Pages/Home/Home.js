import React from 'react';
import Services from '../../components/Home/Services';
import Slider from '../../components/Home/Slider';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
        </div>
    );
};

export default Home;