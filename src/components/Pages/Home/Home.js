import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from './Banner';
import Calculation from './Calculation';
import HomeInventory from './HomeInventory';
import NewArrival from './NewArrival';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <HomeInventory></HomeInventory>
            <NewArrival></NewArrival>
            <Calculation></Calculation>
            
        </div>
    );
};

export default Home;