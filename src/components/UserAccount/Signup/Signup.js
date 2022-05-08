import React, { useRef, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import GoogleAccount from '../SocialAccount/GoogleAccount'
import Loading from '../../Shared/Loading/Loading';

const Signup = () => {

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passRef = useRef('');
    const conPassRef = useRef('');

    const navigate = useNavigate();
    let errorMessage;
    const [passwordError, setPasswordError] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});


    const handleForm = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passRef.current.value;
        const confirm_password = conPassRef.current.value;


        if (password === confirm_password) {
            createUserWithEmailAndPassword(email, password);
            toast('Verification email sent!')
        }
        else
            setPasswordError("Password didn't match");
    }

    if (error)
        errorMessage = <p className='text-red-600'>{error.message}</p>


    if (user)
        navigate('/');

    if(loading)
    <Loading></Loading>


    return (
        <div className="h-screen w-full bg-cover bg-[url('https://img.freepik.com/free-photo/young-student-working-assignment_23-2149257248.jpg?w=740&t=st=1651814498~exp=1651815098~hmac=d49a39ef89505279e346fbbe7b8c8da17bf2dc974dcfb099c7927f601e74ca1b')]">
            <div className="w-full md:w-1/2 h-4/5 bg-slate-900">
                <Link to='/login'>Have an account?</Link>


                <form onSubmit={handleForm} className='py-3'>
                    <input type="text" ref={nameRef} className='w-3/5 h-10 m-3 rounded-lg pl-3' required placeholder='Name' />
                    <input type="email" ref={emailRef} className='w-3/5 h-10 m-3 rounded-lg pl-3' required placeholder='Email' />
                    <input type="password" ref={passRef} className='w-3/5 h-10 m-3 rounded-lg pl-3' required placeholder='Password' />
                    <input type="password" ref={conPassRef} className='w-3/5 h-10 m-3 rounded-lg pl-3' required placeholder='Confirm password' />
                    {errorMessage}
                    <button type="submit" className='w-3/5 h-10 m-3 border border-2 text-white hover:text-white border-amber-900 hover:bg-amber-900 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-md px-5 py-1.5 text-center mr-2 mb-2 dark:border-amber-600 dark:text-amber-400 dark:hover:text-white dark:hover:bg-amber-600 dark:focus:ring-amber-800'>Create</button>
                    {/* <button type="button" class="text-amber-900 hover:text-white border border-amber-800 hover:bg-amber-900 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-amber-600 dark:text-amber-400 dark:hover:text-white dark:hover:bg-amber-600 dark:focus:ring-amber-800">Update</button> */}

                    <p className='text-red-600'>{passwordError ? passwordError : ''}</p>
                </form>
                <GoogleAccount></GoogleAccount>
                <ToastContainer/>
            </div>

           
        </div>

    );
};

export default Signup;