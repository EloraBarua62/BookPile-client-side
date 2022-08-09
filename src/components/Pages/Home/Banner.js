import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img3 from '../../../images/pexels-kerem-kaplan-7770515.jpg';
import img1 from '../../../images/pexels-rafael-cosquiere-2041540.jpg';
import img4 from '../../../images/pexels-sergey-torbik-8263064.jpg';
import img2 from '../../../images/pexels-aline-viana-prado-2465877.jpg';
// import img5 from '../../../images/img5.webp';

//import './Banner.css';
// import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <Carousel autoPlay infiniteLoop interval={5000} showThumbs={false} showStatus={false}>
                <div>
                    <img className='w-full h-[600px] md:h-[600px] object-cover' src={img1} />
                </div>
                <div>
                    <img className='w-full h-[600px] md:h-[600px] object-cover' src={img2} />
                </div>
                <div>
                    <img className='w-full h-[600px] md:h-[600px] object-cover' src={img3} />
                </div>
                <div>
                    <img className='w-full h-[600px] md:h-[600px] object-cover' src={img4} />
                </div>
            </Carousel>
    );
};

export default Banner;