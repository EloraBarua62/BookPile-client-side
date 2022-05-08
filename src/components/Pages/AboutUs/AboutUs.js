import React from 'react';
import image from '../../../images/clay-banks-z_DkoUqgx6M-unsplash (1) (1) (1).jpg'

const AboutUs = () => {
    return (
        <div className='flex-wrap  align-middle mt-10'>

            <p className='text-xl text-white font-medium p-10 mx-auto mb-5'>BookPile is a website of inventory page.Here,different types of book have in collection.Like fiction,non-fiction,history,biograpy,health etc.We provide a sufficient amounts of books locally.</p>
            <img src={image} alt=""  className='w-80 h-80 mx-auto'/>
            
        </div>
    );
};

export default AboutUs;