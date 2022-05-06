import React from 'react';
import { useParams } from 'react-router-dom';
import useBookId from '../../hooks/useBookId';
import './Inventory.css'

const Inventory = () => {

    const { bookId } = useParams();

    const [book] = useBookId(bookId);
    // console.log(book);

    const handleDeliver = (id, number) => {
        let quantity = number;
        console.log(quantity);
        if (quantity > 0) {
            --quantity;
            const newItem = { quantity };

            console.log('Item decreased', newItem);

            // const url = `http://localhost:5000/books/${id}`;
            fetch(`http://localhost:5000/books/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newItem),
            })
                .then(response => response.json())
                .then(data => {
                    alert('Your book will be delivered');
                })
        }
    }

    return (
        <div className='w-3/4 h-1/4 mx-auto mt-10 grid sm:grid-cols-1 md:grid-cols-2 rounded-md border-solid border-4  border-amber-700 hover:border-white'>
            <img src={book.img} alt="" className='w-3/5 mx-auto my-10' />
            <div className=' text-white my-5 mx-5 py-10'>
                <h1 className='font-bold text-5xl'>{book.name}</h1>
                <p className='my-10'>{book.description}</p>
                <h1 className='font-medium text-xl'>Price : {book.price}</h1>
                <h1 className='font-medium text-base'>Quantity : {book.quantity}</h1>
                
                <button onClick={() => { handleDeliver(book._id, book.quantity) }} type="button" class="mt-10 text-amber-700 hover:text-white border-4 border-amber-800 hover:bg-amber-900 focus:ring-4 focus:outline-none focus:ring-amber-300 font-large rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:border-amber-600 dark:text-amber-400 dark:hover:text-white dark:hover:bg-amber-600 dark:focus:ring-amber-800">Deliver</button>
            </div>
        </div>
    );
};

export default Inventory;