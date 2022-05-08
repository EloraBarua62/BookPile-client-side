import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Book = ({ book }) => {
    const { img } = book;

    // // Navigation
    // const navigate = useNavigate();

    // // Handle onClick event handler
    // const handleBookInfo = (id) => {
    //     navigate(`/inventory/${id}`)
    // }



    const handleRemoveItem = id => {
        const remove = window.confirm("Are you sure about deletion?")

        if (remove) {
            fetch(`https://aqueous-forest-29360.herokuapp.com/books/${id}`, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    toast('Deletion complete')
                })
        }
    }



    return (
        <div className='w-72 flex flex-col border rounded-md border-solid border-8 bg-white border-amber-700 hover:border-white'>
            <img src={img} alt="" className='w-60 mx-auto mt-3' />
            <div className='mx-3'>
                <h1 className='font-bold text-2xl'>{book.name}</h1>
                <h1 className='font-medium text-xl'>{book.price}</h1>
                <h1 className='font-medium text-base'>{book.quantity}</h1>
                <p>{book.description}</p>
                <button onClick={() => handleRemoveItem(book._id)} className='bg-amber-700 hover:bg-amber-600 text-white my-5 px-5 py-3 rounded-lg text-xl font-bold'>Delete</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Book;