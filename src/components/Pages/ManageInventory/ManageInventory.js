import { PlusIcon } from '@heroicons/react/solid';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useBooks from '../../hooks/useBooks';
import Book from '../Home/Book';

const ManageInventory = () => {
    const [books] = useBooks();

    const navigate = useNavigate();

    const handleInventory = () => {
        navigate('/add_inventory');
    }

    // const homeBook = books.slice(0,6)
    return (
        <div className='w-full flex justify-center py-20'>
            <div className='w-11/12'>
                <div className='mt-8 mb-10'>
                    <div className='w-full bg-amber-500' style={{ height: '2px' }}></div>
                    <h1 className='text-4xl text-amber-200 uppercase font-bold text-center py-1'>Manage Your Inventory</h1>
                    <div className='w-full bg-amber-500' style={{ height: '2px' }}></div>
                </div>

                {/* <div className='mx-auto w-4/5 py-20'> */}
                {/* <div className='bg-slate-800 flex-wrap mx-auto my-20'>
                    <h1 className='inline-block text-3xl font-bold py-5 text-white'>Want To Enreach Your Inventory?</h1>
                    <button onClick={() => handleInventory()} className=' bg-amber-500 hover:bg-amber-600 text-white flex ml-auto mr-10 my-2 px-5 py-3 rounded-lg text-xl font-bold'><PlusIcon className='w-8 h-8 pr-2'></PlusIcon> Add new item </button>
                </div> */}
                {/* <h1 className='text-4xl text-amber-500 font-bold text-center'>All Books</h1>
                <div className='w-full bg-amber-500' style={{ height: '2px' }}></div> */}
                <button onClick={() => handleInventory()} className=' bg-amber-500 hover:bg-amber-600 text-white flex mx-auto my-2 px-5 py-2 rounded-lg text-xl font-bold'><PlusIcon className='w-6 h-6 md:w-8 md:h-8  pr-2'></PlusIcon> Add new item </button>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 mb-10 gap-x-5 gap-y-10'>
                    {
                        books.map(book => <Book
                            key={book._id}
                            book={book}
                        >
                        </Book>)
                    }
                </div>
                {/* </div> */}
            </div>
        </div>

    );
};

export default ManageInventory;