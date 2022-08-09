import { ArrowCircleLeftIcon, ArrowCircleRightIcon, BookOpenIcon } from '@heroicons/react/solid';
import React from 'react';
import booklover from '../../../images/booklover.jpg'

const NewArrival = () => {
    return (
        <div className='w-full bg-amber-600 my-20 py-32'>
            <div className='px-16'>
                <h1 className='text-4xl text-amber-200 uppercase font-bold text-center'>Lates News</h1>
                <div className='w-full h-1 bg-amber-200'></div>
            </div>
            
            <div className='w-3/4 h-1/4 mx-auto mt-10 py-10 grid sm:grid-cols-1 lg:grid-cols-2 rounded-md border-solid border-4  border-amber-600  shadow-2xl'>
                <img src={booklover} alt="" className='w-80 h-80 mx-auto my-10 hover:opacity-90 ' />
                <div className=' text-white my-5 mx-5 py-10'>
                    <p className='text-2xl text-center'>Market of book is always facinating for book lovers and authers.If you are also interested like them,then check the bellow buttom</p>

                    <br />
                    <br />
                    <a href="https://www.nytimes.com/books/best-sellers/"><ArrowCircleRightIcon className='w-20 h-20 mx-auto'></ArrowCircleRightIcon></a>
                </div>
            </div>
        </div>
        
    );
};

export default NewArrival;