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
        <div className='mx-auto max-w-xs flex flex-col rounded-md border-solid border-4 md:border-8 bg-white border-amber-500 hover:border-white'>
            <img src={img} alt="" className='border-4 border-amber-500 w-3/4 h-80 mx-auto my-3' />
            <div className='px-5 text-left'>
                <h1 className='font-bold text-2xl py-1'>{book.name}</h1>
                <h1 className='font-medium text-xl py-1'><span className='font-bold'>Price : </span>{book.price}</h1>
                <h1 className='font-medium text-xl py-1'><span className='font-bold'>Quantity : </span>{book.quantity}</h1>
                <p><span className='font-bold'>Details : </span>{book.description}</p>
                <button onClick={() => { handleRemoveItem(book._id) }} type="button" class="bg-amber-600 hover:bg-amber-700 text-white my-5 px-5 py-3 rounded-lg text-xl font-bold">Delete</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Book;