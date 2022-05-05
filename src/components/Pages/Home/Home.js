import React from 'react';
import Banner from './Banner';
import HomeInventory from './HomeInventory';

const Home = () => {
    return (
        <div className='mt-52'>
            <Banner></Banner>
            <HomeInventory></HomeInventory>
        </div>
    );
};

export default Home;