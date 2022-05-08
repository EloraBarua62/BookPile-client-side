import React, { useRef, useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import GoogleAccount from '../SocialAccount/GoogleAccount';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Shared/Loading/Loading';
import axios from 'axios';

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

    if (loading || sending) {
        return <Loading></Loading>
    }




    // Handle form
    const handleForm = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;

        await signInWithEmailAndPassword(email, password);

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
        <div className="h-screen bg-cover bg-[url('https://img.freepik.com/free-photo/young-student-working-assignment_23-2149257248.jpg?w=740&t=st=1651814498~exp=1651815098~hmac=d49a39ef89505279e346fbbe7b8c8da17bf2dc974dcfb099c7927f601e74ca1b')]">
            <div className="w-1/2 h-4/5 bg-slate-900">


                <form onSubmit={handleForm}>

                    <input type="email" name="email" ref={emailRef} className='w-3/5 h-10 m-3 rounded-lg pl-3' placeholder='Email' />
                    <input type="password" name="password" ref={passRef} className='w-3/5 h-10 m-3 rounded-lg pl-3' placeholder='Password' />

                    {errorMessage}
                    <button type="submit" className='w-3/5 h-10 m-3 border border-2 text-white hover:text-white border-amber-900 hover:bg-amber-900 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-lg px-5 py-1.5 text-center mr-2 mb-2 dark:border-amber-600 dark:text-amber-400 dark:hover:text-white dark:hover:bg-amber-600 dark:focus:ring-amber-800'>Login</button>
                    {/* <button type="button" class="text-amber-900 hover:text-white border border-amber-800 hover:bg-amber-900 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-amber-600 dark:text-amber-400 dark:hover:text-white dark:hover:bg-amber-600 dark:focus:ring-amber-800">Update</button> */}

                    {/* <p className='text-red-600'>{passwordError ? passwordError : ''}</p> */}

                    <br />
                    <div className='w-3/5 flex justify-between mx-auto mt-5'>
                        <Link to='/signup' className='text-white'>New to BookPile?</Link>
                        <button onClick={() => handleResetPassword()} className='text-white ml-auto'>Forget Password?</button>
                    </div>



                </form>
                <GoogleAccount></GoogleAccount>
                <ToastContainer />
            </div>


        </div>

    );
};

export default Login;