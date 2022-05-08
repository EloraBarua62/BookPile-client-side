import React from 'react';

const Footer = () => {
    return (
        <div className='w-full flex py-20 mt-10 justify-evenly align-middle bg-slate-900 text-amber-600'>
            <div className='sm:order-1'>
                <h1 className='text-xl font-semibold'>Visit</h1>
                <p>Our office is ...................,Bangladesh</p>
            </div>
            <div className='sm:order-2'>
                <h1 className='text-xl font-semibold'>New Busniess</h1>
                <p>abc@gmail.com</p>
                <p>017*******</p>
            </div>
            <div className='sm:order-3'>
                <h1 className='text-xl font-semibold'>Follow</h1>
                <a>Linkdin</a>
                <br />
                <a>Twitter</a>
                <br />
                <a>Instagram</a>
            </div>
            <div className='sm:order-4'>
                <h1 className='text-4xl font-bold'>BookPile</h1>
                <p>We care for your comfortness</p>
            </div>
            
            
        </div>
    );
};

export default Footer;