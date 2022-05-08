import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { TrashIcon } from '@heroicons/react/solid'
import { toast, ToastContainer } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';

const MyItem = () => {
    const [user , loading] = useAuthState(auth);
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

    if(loading)
    <Loading></Loading>

    return (
        <div className='mx-20 my-20'>
            <h2 className='text-white text-4xl my-10 font-bold'>You added {myBooks.length} items</h2>
            <div className="table w-4/5 mb-5 mx-auto">
                <div className="table-row-group">
                    {
                        myBooks.map(myBook => <div className="table-row bg-amber-700 h-16">
                            <div className="table-cell w-32 py-10 border-b-8 border-slate-700">
                                <img src={myBook.img} alt="" />
                            </div>


                            <div className="table-cell border-b-8 py-10 border-slate-700 text-white" >
                                <h1 className='text-2xl'>{myBook.name}</h1>
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