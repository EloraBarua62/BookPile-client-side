import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../images/img1.jpg';
import img2 from '../../../images/img2.jpg';
import img3 from '../../../images/img3.jpg';
// import img4 from '../../../images/img4.avif';
// import img5 from '../../../images/img5.webp';

//import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <Carousel autoPlay infiniteLoop interval={5000} showThumbs={false}>
                <div>
                    <img className='w-full h-[600px] md:h-[600px] object-cover' src={img1} />
                </div>
                <div>
                    <img className='w-full h-[600px] md:h-[600px] object-cover' src={img2} />
                </div>
                <div>
                    <img className='w-full h-[600px] md:h-[600px] object-cover' src={img3} />
                </div>
                {/* <div>
                    <img className='w-full h-[600px] md:h-[600px] object-cover' src={img4} />
                </div>
                <div>
                    <img className='w-full h-[600px] md:h-[600px] object-cover' src={img5} />
                </div> */}
            </Carousel>
        </div>
    );
};

export default Banner;