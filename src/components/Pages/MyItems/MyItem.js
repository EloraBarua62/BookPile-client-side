import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { TrashIcon } from '@heroicons/react/solid'
import { toast, ToastContainer } from 'react-toastify';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [myBooks, setMyBooks] = useState([]);


    useEffect(() => {

        const getMyBooks = () => {
            const email = user.email;
            const url = `https://aqueous-forest-29360.herokuapp.com/my_items?email=${email}`;
            fetch(url)
                .then(res => res.json())
                .then(data => setMyBooks(data))
        }

        getMyBooks();
    }, [user]);


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
        <div className='mx-20 my-20'>
            <h2 className='text-white text-4xl'>You added only {myBooks.length} items</h2>
            <div className="table w-4/5 mb-5">
                <div className="table-row-group">
                    {
                        myBooks.map(myBook => <div className="table-row bg-amber-700 h-16">
                            <div className="table-cell w-32 my-auto border-b-8 border-slate-700">
                                <img src={myBook.img} alt="" />
                            </div>


                            <div className="table-cell border-b-8 border-slate-700 text-white" >
                                <h1 className='text-2xcl'>{myBook.name}</h1>
                                <p className='text-base'>{myBook._id}</p>
                                <h1 className='text-base'>{myBook.quantity}</h1>

                            </div>
                            <div className='table-cell border-b-8 border-slate-700'>
                                <button onClick={() => handleRemoveItem(myBook._id)} className='text-white w-16 h-16'><TrashIcon></TrashIcon></button>
                            </div>


                        </div>)
                    }
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default MyItem;