import React from 'react';

const Footer = () => {
    return (
        <footer className=' bg-slate-900 text-amber-400'>
            <div className='w-full flex-wrap md:flex py-20 mt-10 justify-evenly align-middle'>
                <div className='sm:order-1 text-center my-8'>
                    <h1 className='text-xl font-semibold'>Visit</h1>
                    <p>Our office is ...................,Bangladesh</p>
                </div>
                <div className='sm:order-2 text-center my-8'>
                    <h1 className='text-xl font-semibold'>New Busniess</h1>
                    <p>abc@gmail.com</p>
                    <p>017*******</p>
                </div>
                <div className='sm:order-3 text-center my-8'>
                    <h1 className='text-xl font-semibold'>Follow</h1>
                    <a className=' hover:text-white cursor-pointer'>Linkdin</a>
                    <br />
                    <a className=' hover:text-white cursor-pointer'>Twitter</a>
                    <br />
                    <a className=' hover:text-white cursor-pointer'>Instagram</a>
                </div>
                <div className='sm:order-4 text-center my-8 hover:text-white'>
                    <h1 className='text-4xl font-bold'>BookPile</h1>
                    <p>We care for your comfortness</p>
                </div>


            </div>
            <div className='text-center py-5 text-white'>
                <p>© 2022 Developed by <span className='text-amber-400'> Elora Barua</span></p>
            </div>
        </footer>
    );
};

export default Footer;