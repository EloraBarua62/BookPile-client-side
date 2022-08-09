import React, { useRef, useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import GoogleAccount from '../SocialAccount/GoogleAccount';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Shared/Loading/Loading';
import axios from 'axios';
import './Login.css'

const Login = () => {

    const emailRef = useRef('');
    const passRef = useRef('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    let email;
    let password;
    let errorMessage;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);



    // Messages
    if (error) {
        errorMessage = <p className='text-red-600'>{error.message}</p>
    }

    if (user) {
        navigate(from, { replace: true })

    }

    if (loading)
        <Loading></Loading>





    // Handle form
    const handleForm = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;

        await signInWithEmailAndPassword(email, password);


        const url = `https://aqueous-forest-29360.herokuapp.com/login`;
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(email)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                localStorage.setItem('accessToken', data.accessToken);

            })

    }



    // // Handle form
    // const handleForm = async event => {
    //     event.preventDefault();
    //     const email = emailRef.current.value;
    //     const password = passRef.current.value;

    //     await signInWithEmailAndPassword(email, password);
    //     const { data } = await axios.post('https://aqueous-forest-29360.herokuapp.com/login', { email });
    //     // console.log(data);
    //     localStorage.setItem('accessToken', data.accessToken);
    //     navigate(from, { replace: true });
    // }


    const handleResetPassword = async () => {
        email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('email sent');
        }
        else {
            toast('Enter your email,pls!');
        }
    }




    return (
        <div id='overlay' className="w-full flex-col items-center h-screen bg-cover bg-no-repeat bg-center bg-[url('https://img.freepik.com/free-photo/young-student-working-assignment_23-2149257248.jpg?w=740&t=st=1651814498~exp=1651815098~hmac=d49a39ef89505279e346fbbe7b8c8da17bf2dc974dcfb099c7927f601e74ca1b')]" >
            <div className='px-20 py-16'>
                <div className='w-full bg-amber-500' style={{ height: '2px' }}></div>
                <h1 className='text-4xl text-amber-500 uppercase font-bold text-center py-1'>login to bookpile</h1>
                <div className='w-full bg-amber-500' style={{ height: '2px' }}></div>
            </div>
            <div className="w-5/6 md:w-3/5 xl:w-1/2 py-20 bg-slate-900 mx-auto">
                {/* <h1 className='text-3xl font-bold uppercase text-amber-500'>Login</h1>             */}
                <form onSubmit={handleForm} className='text-center'>

                    <input type="email" name="email" ref={emailRef} className='w-3/5 h-10 m-3 rounded-lg pl-3' placeholder='Email' />
                    <input type="password" name="password" ref={passRef} className='w-3/5 h-10 m-3 rounded-lg pl-3' placeholder='Password' />

                    {errorMessage}
                    <button type="submit" className='w-3/5 h-10 m-3  text-white hover:text-white bg-amber-600 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 uppercase font-medium rounded-lg text-lg px-5 py-1.5 text-center mr-2 mb-2 dark:border-amber-600 dark:text-amber-400 dark:hover:text-white dark:hover:bg-amber-600 dark:focus:ring-amber-800'>Login</button>
                    {/* <button type="button" class="text-amber-900 hover:text-white border border-amber-800 hover:bg-amber-900 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-amber-600 dark:text-amber-400 dark:hover:text-white dark:hover:bg-amber-600 dark:focus:ring-amber-800">Update</button> */}

                    {/* <p className='text-red-600'>{passwordError ? passwordError : ''}</p> */}

                    <br />




                </form>
                <div className='py-5 flex'>
                    <div className='w-1/2 bg-amber-500 my-auto' style={{ height: '2px' }}></div>
                    <h1 className='text-2xl text-amber-500 uppercase font-bold text-center px-2'>or</h1>
                    <div className='w-1/2 bg-amber-500 my-auto' style={{ height: '2px' }}></div>
                </div>
                <div className='w-full flex justify-center mx-1'>
                    <h1 className='text-2xl font-bold text-white pr-3 my-auto uppercase'>Log In With</h1>
                    <GoogleAccount></GoogleAccount>
                </div>
                <div className='w-3/5 flex justify-between mx-auto mt-10 gap-x-7'>
                    <Link to='/signup' className='text-amber-400 text-xl'>New to BookPile?</Link>
                    <button onClick={() => handleResetPassword()} className='text-amber-400 text-xl ml-auto'>Forget Password?</button>
                </div>
                <ToastContainer />
            </div>


        </div>

    );
};

export default Login;