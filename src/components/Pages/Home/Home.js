import React from 'react';
import Banner from './Banner';
import HomeInventory from './HomeInventory';
import NewArrival from './NewArrival';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <HomeInventory></HomeInventory>
            <NewArrival></NewArrival>
        </div>
    );
};

export default Home;