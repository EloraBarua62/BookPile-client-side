import React from 'react';
import image from '../../../images/clay-banks-z_DkoUqgx6M-unsplash (1) (1) (1).jpg'
import useBooks from '../../hooks/useBooks';

const AboutUs = () => {

    const [books] = useBooks();
    let book_no = 0;
    let quantity = 0;

    const countBook = () => {
        books.map(book => {
            quantity += (parseInt(book.quantity));
        })

    }


    countBook();

    return (
        <div className='w-full py-10 '>
            <div className='mt-8 mb-20 px-20'>
                <div className='w-full bg-amber-500' style={{ height: '2px' }}></div>
                <h1 className='text-4xl text-amber-200 uppercase font-bold text-center py-1'>About us</h1>
                <div className='w-full bg-amber-500' style={{ height: '2px' }}></div>
            </div>
            <div className='px-10 grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-10'>
                <div className='text-center sm:order-4 '>
                    {
                        <p className='text-white text-xl'>BookPile is a website of inventory page.Here,different types of book have in collection.Like fiction,non-fiction,history,biograpy,health etc.We provide a sufficient amounts of books locally.This inventory is fullfilled with {quantity} books of {books.length} different category written by <span className='text-amber-500 text-2xl font-bold'>WorldClass</span> Author's.Here are some books which dekiverd to our coustomers most....</p>

                    }
                    {books.slice(0, 7).map(book => <h1 className='text-amber-500 text-2xl'>{book.name}</h1>)}
                    <p className='text-white text-xl'>and so on.</p>

                </div>


                <img src={image} alt="" className='max-w-sm h-80 sm:order-1 mx-auto' />

            </div>
        </div>


    );
    // return (
    //     <div className='flex-wrap  align-middle mt-10'>

    //         <p className='text-xl text-white font-medium p-10 mx-auto mb-5'>BookPile is a website of inventory page.Here,different types of book have in collection.Like fiction,non-fiction,history,biograpy,health etc.We provide a sufficient amounts of books locally.</p>
    //         <img src={image} alt=""  className='w-80 h-80 mx-auto'/>
            
    //     </div>
    // );
};

export default AboutUs;