import React from 'react';
import { useNavigate } from 'react-router-dom';

const Book = ({ book }) => {
    const { img } = book;

    // Navigation
    const navigate = useNavigate();

    // Handle onClick event handler
    const handleBookInfo = (id) => {
        navigate(`/inventory/${id}`)
    }


    
    return (
        <div className='w-72 flex flex-col border rounded-md border-solid border-1 hover:border-2 border-amber-700 hover:border-amber-900'>
            <img src={img} alt="" className='w-60 mx-auto mt-3'/>
            <div className='mx-3'>
                <h1 className='font-bold text-2xl'>{book.name}</h1>
                <h1 className='font-medium text-xl'>{book.price}</h1>
                <h1 className='font-medium text-base'>{book.quantity}</h1>
                <p>{book.description}</p>
                <button onClick={()=>{handleBookInfo(book._id)}} type="button" class="text-amber-900 hover:text-white border border-amber-800 hover:bg-amber-900 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-amber-600 dark:text-amber-400 dark:hover:text-white dark:hover:bg-amber-600 dark:focus:ring-amber-800">Update</button>
            </div>
        </div>
    );
};

export default Book;