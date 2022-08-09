import { ArrowNarrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useBooks from '../../hooks/useBooks';
import Book from './Book';

const HomeInventory = () => {
    const [books] = useBooks();
    const navigate = useNavigate();

    const handleInventory = () => {
        navigate('/manage_inventory');
    }


    // Handle onClick event handler
    const handleBookInfo = (id) => {
        navigate(`/inventory/${id}`)
    }

    // const homeBook = books.slice(0,6)
    return (
        <div className='w-full flex justify-center py-20'>
            <div className='w-11/12'>
                <h1 className='text-4xl text-amber-500 font-bold uppercase text-left'>Inventory</h1>
                <div className='w-full h-1 bg-amber-500'></div>
                <div className='pt-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-x-5 gap-y-10'>
                    {
                        books.slice(0, 6).map(book => <div className='mx-auto max-w-xs flex flex-col rounded-md border-solid border-4 md:border-8 bg-white border-amber-500 hover:border-white'>
                            <img src={book.img} alt="" className='border-4 border-amber-500 w-3/4 h-80 mx-auto my-3' />
                            <div className='px-5 text-left'>
                                <h1 className='font-bold text-2xl py-1'>{book.name}</h1>
                                <h1 className='font-medium text-xl py-1'><span className='font-bold'>Price : </span>{book.price}</h1>
                                <h1 className='font-medium text-xl py-1'><span className='font-bold'>Quantity : </span>{book.quantity}</h1>
                                <p><span className='font-bold'>Details : </span>{book.description}</p>
                                <button onClick={() => { handleBookInfo(book._id) }} type="button" class="bg-amber-600 hover:bg-amber-700 text-white my-5 px-5 py-3 rounded-lg text-xl font-bold">Update</button>
                            </div>
                        </div>)
                    }
                    
                </div>
                <div className='w-full flex justify-center'>
                    <button onClick={() => handleInventory()} className='bg-amber-600 hover:bg-amber-500 text-white mt-20 px-5 py-3 rounded-lg text-xl font-bold'>Manage Inventories </button>
                </div>
                
            </div>
        </div>


    );
};

export default HomeInventory;