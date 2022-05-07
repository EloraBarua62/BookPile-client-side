import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';

const AddInventory = () => {

    const [user] = useAuthState(auth);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `https://aqueous-forest-29360.herokuapp.com/add_book`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                toast('Your book is added successfully');
            })
    }


    return (

        <div className="w-1/2 h-4/5 bg-slate-900 mx-auto mt-10">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder='Book name' className='w-3/5 h-10 m-3 rounded-lg pl-3' {...register("name")} />
                <input type="text" placeholder='Price' className='w-3/5 h-10 m-3 rounded-lg pl-3' {...register("price")} />
                <input type="number" placeholder='Quantity' className='w-3/5 h-10 m-3 rounded-lg pl-3' {...register("quantity")} />
                <input value={user.displayName ? user.displayName : user.name} placeholder="Supplier's name" {...register("supplier")} className='w-3/5 h-10 m-3 rounded-lg pl-3' />
                <input value={user.email} placeholder="Email" {...register("email")} className='w-3/5 h-10 m-3 rounded-lg pl-3' />
                <textarea placeholder='Description'  {...register("description")} className='w-3/5 h-32 m-3 rounded-lg pl-3'></textarea>
                <input type="text" placeholder="Image URL" {...register("img")} className='w-3/5 h-10 m-3 rounded-lg pl-3' />
                <button type="submit" className='w-3/5 h-10 m-3 border border-2 text-white hover:text-white border-amber-900 hover:bg-amber-900 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-md px-5 py-1.5 text-center mr-2 mb-2 dark:border-amber-600 dark:text-amber-400 dark:hover:text-white dark:hover:bg-amber-600 dark:focus:ring-amber-800'>Add Book</button>
            </form>
            <ToastContainer />
        </div>

    );
};

export default AddInventory;