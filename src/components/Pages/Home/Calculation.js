import { BookmarkAltIcon, BookOpenIcon } from '@heroicons/react/solid';
import React from 'react';
import useBooks from '../../hooks/useBooks';
import calculationImg from '../../../images/clay-banks-z_DkoUqgx6M-unsplash (1) (1) (1).jpg'
import { useNavigate } from 'react-router-dom';

const Calculation = () => {
    const [books] = useBooks();
    let book_no = 0;
    let quantity = 0;

    const countBook = () => {
        books.map(book => {
            quantity += (parseInt(book.quantity));
        })

    }
    const navigate = useNavigate();


    countBook();

    return (
        <div className='w-full h-1/2 '>
            <div className='px-16 my-20'>
                <h1 className='text-4xl text-amber-500 uppercase text-right font-bold'>New Suplier</h1>
                <div className='w-full h-1 bg-amber-500'></div>
            </div>
            <div className='px-5 grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-10'>
                <div className='text-center sm:order-4 px-10'>
                    {
                        <p className='text-white text-2xl'>BookPile is a website of inventory page.Here,different types of book have in collection.Like fiction,non-fiction,history,biograpy,health etc.We provide a sufficient amounts of books locally.This inventory is fullfilled with {quantity} books of {books.length} different category written by <span className='text-amber-500 text-2xl font-bold'>WorldClass</span> Author's.Here are some books which dekiverd to our coustomers most....If you want to be a supplier,click the button bellow</p>

                    }
                    {/* {books.slice(0, 7).map(book => <h1 className='text-amber-500 text-2xl'>{book.name}</h1>)}
                    <p className='text-white text-xl'>and so on.</p> */}
                    <button onClick={() => navigate('/add_inventory')} className='bg-amber-600 hover:bg-amber-500 text-white mt-20 px-5 py-3 rounded-lg text-xl font-bold'>Supply Now</button>
                </div>


                <img src={calculationImg} alt="" className='max-w-lg h-96 sm:order-1 mx-auto my-auto' />

            </div>
        </div>


    );
};

export default Calculation;