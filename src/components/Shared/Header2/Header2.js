import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {

    let errorElement;
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
        console.log(email, password);
    }
    if (loading) {
        return <div className='text-center mt-10'>loading...</div>
    }

    if (error) {
        errorElement = <p className='text-red-600'>Error: {error?.message}</p>
    }

    if (user) {
        navigate('/home');
    }

    return (
        <div className='mt-32'>
            <h2 className='text-center text-3xl'>SignUp</h2>
            <div className="w-full max-w-md mx-auto">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" placeholder="****************" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            <input className='w-full' type="submit" value="SignUp" />
                        </button>
                    </div>
                    <div className='text-center mt-5'>
                        <Link to='/signin' className="inline-block align-baseline font-bold  text-blue-500 hover:text-blue-800">
                            Already have an account
                        </Link>
                    </div>
                    {errorElement}
                </form>
            </div>
        </div>
    );
};

export default SignUp;