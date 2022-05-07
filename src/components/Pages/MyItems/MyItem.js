import React, { useEffect, useState } from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import {TrashIcon} from '@heroicons/react/solid'

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [myBooks, setMyBooks] = useState([]);


    useEffect(() => {

        const getMyBooks = () => {
            const email = user.email;
            const url = `http://localhost:5000/my_items?email=${email}`;
            fetch(url)
                .then(res => res.json())
                .then(data => setMyBooks(data))
        }

        getMyBooks();
    }, [user]);

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
                            <button className='text-white w-16 h-16'><TrashIcon></TrashIcon></button>
                        </div>
                       
                    
                    </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyItem;