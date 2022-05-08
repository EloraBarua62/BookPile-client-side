import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import useBookId from '../../hooks/useBookId';
import './Inventory.css'

const Inventory = () => {

    const { bookId } = useParams();

    const [book] = useBookId(bookId);

    const [addBooks, setAddBooks] = useState(false);


    const bookRef = useRef('');

    // console.log(book);

    const handleDeliver = (id, number) => {
        let quantity = number;
        console.log(quantity);
        if (quantity > 0) {
            --quantity;
            const newItem = { quantity };

            console.log('Item decreased', newItem);

            // const url = `https://aqueous-forest-29360.herokuapp.com/books/${id}`;
            fetch(`https://aqueous-forest-29360.herokuapp.com/books/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newItem),
            })
                .then(response => response.json())
                .then(data => {
                    alert('Your book will be delivered');
                    window.location.reload();
                })
        }


    }


    const handleText = () => {
        setAddBooks(true);
    }


    const handleAdd = (id, number) => {

        const bookNumber = parseInt(bookRef.current.value);
        let quantity = parseInt(number);
        console.log(typeof quantity);
        console.log(typeof bookNumber);

        quantity = quantity + bookNumber;
        console.log(quantity);

        const newItem = { quantity };

        console.log('Item increased', newItem);

        // const url = `https://aqueous-forest-29360.herokuapp.com/books/${id}`;
        fetch(`https://aqueous-forest-29360.herokuapp.com/books/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem),
        })
            .then(response => response.json())
            .then(data => {
                alert('New book will be added');
                setAddBooks(false);
                window.location.reload();
            })



    }

    return (
        <div className='w-3/4 h-1/4 mx-auto mt-10 grid sm:grid-cols-1 md:grid-cols-2 rounded-md border-solid border-4  border-amber-700 hover:border-white'>
            <img src={book.img} alt="" className='w-3/5 mx-auto my-10' />
            <div className=' text-white my-5 mx-5 py-10'>
                <h1 className='font-bold text-5xl'>{book.name}</h1>
                <p className='my-10'>{book.description}</p>
                <h1 className='font-medium text-xl'>Price : {book.price}</h1>
                <h1 className='font-medium text-base'>Quantity : {book.quantity}</h1>


                {
                    book.quantity > 0 ?
                        <button onClick={() => { handleDeliver(book._id, book.quantity) }} type="button" class="bg-red-700 hover:bg-red-600 text-white m-5 px-5 py-3 rounded-lg text-xl font-bold">Deliver</button>
                        :
                        <div>
                            <button type="button" class="text-red-600 mt-5 text-5xl font-bold" disabled>Sold out</button>
                            <br />
                        </div>

                }




                <button onClick={handleText} class="bg-green-700 hover:bg-green-600 text-white m-5 px-5 py-3 rounded-lg text-xl font-bold">Restore</button>

                {
                    addBooks ?
                        <div className='bg-green-700 w-80 h-40 mx-auto mt-5 pt-8 rounded-lg'>
                            <input type="number" ref={bookRef} className='h-10 rounded-lg text-green-900 text-xl font-bold pl-3' />
                            <br />
                            <button onClick={() => { handleAdd(book._id, book.quantity) }} className='bg-green-900 m-5 px-5 py-2 rounded-lg text-xl font-bold'>Submit</button>

                        </div>
                        :
                        ''
                }
            </div>
        </div>
    );
};

export default Inventory;