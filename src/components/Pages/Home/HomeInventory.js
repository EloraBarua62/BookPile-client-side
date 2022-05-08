import { ArrowNarrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useBooks from '../../hooks/useBooks';
import Book from './Book';

const HomeInventory = () => {
    const [books] = useBooks();
    const navigate = useNavigate();

    const handleInventory = () =>{
        navigate('/manage_inventory');
    }


    // Handle onClick event handler
    const handleBookInfo = (id) => {
        navigate(`/inventory/${id}`)
    }

    // const homeBook = books.slice(0,6)
    return (
        <div className='mx-auto w-4/5 py-20'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
                {
                    books.slice(0, 6).map(book => <div className='w-72 flex flex-col border rounded-md border-solid border-8 bg-white border-amber-700 hover:border-white'>
                        <img src={book.img} alt="" className='w-60 mx-auto mt-3' />
                        <div className='mx-3'>
                            <h1 className='font-bold text-2xl'>{book.name}</h1>
                            <h1 className='font-medium text-xl'>{book.price}</h1>
                            <h1 className='font-medium text-base'>{book.quantity}</h1>
                            <p>{book.description}</p>
                            <button onClick={() => { handleBookInfo(book._id) }} type="button" class="bg-amber-700 hover:bg-amber-600 text-white my-5 px-5 py-3 rounded-lg text-xl font-bold">Update</button>
                        </div>
                    </div>)
                }
                <button onClick={() => handleInventory()} className='bg-amber-700 hover:bg-amber-600 text-white mx-2 my-5 py-3 rounded-lg text-xl font-bold'>Manage Inventories </button>
            </div>
        </div>
        
        
    );
};

export default HomeInventory;