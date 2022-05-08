import { BookmarkAltIcon, BookOpenIcon } from '@heroicons/react/solid';
import React from 'react';
import useBooks from '../../hooks/useBooks';
import calculationImg from '../../../images/clay-banks-z_DkoUqgx6M-unsplash (1) (1) (1).jpg'

const Calculation = () => {
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
            <div className='w-3/5 h-1/2 mx-auto my-60 grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-10'>
                
                <div className='sm:order-4'>
                {
                    <p className='text-white text-xl'>Your inventory is fullfilled with {quantity} books of {books.length} different category written by <span className='text-amber-700 text-2xl font-bold'>WorldClass</span> Author's.Here are some books which dekiverd to our coustomers most....</p>

                }
                {books.slice(0,7).map(book => <h1 className='text-amber-600 text-2xl'>{book.name}</h1>)}
                <p className='text-white text-xl'>and so on.</p>
                </div>

            <img src={calculationImg} alt="" className='w-80 h-80 sm:order-1 mx-auto' />
           
        </div>
    
    );
};

export default Calculation;