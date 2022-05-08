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
        <div>
            
            <div className='mx-auto w-4/5 py-20'>
                <button onClick={() => handleInventory()} className=' bg-amber-700 hover:bg-amber-600 text-white flex ml-auto mr-10 my-5 px-5 py-3 rounded-lg text-xl font-bold'><PlusIcon className='w-8 h-8 pr-2'></PlusIcon> Add new item </button>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-2 my-10'>
                    {
                        books.map(book => <Book
                            key={book._id}
                            book={book}
                        >
                        </Book>)
                    }
                </div>
            </div>

        </div>

    );
};

export default ManageInventory;