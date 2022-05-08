import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../images/logo image.png';
import { BsGoogle } from "react-icons/bs";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import Spinner from '../../Shared/Spinner/Spinner';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, PasswordReseterror] = useSendPasswordResetEmail(auth);

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const getEmail = event => {
        setEmail(event.target.value);
    }
    const getPassword = event => {
        setPassword(event.target.value);
    }
    if (user || googleUser) {
        navigate(from, { replace: true });
    }
    const doLogIn = async event => {
        event.preventDefault();
        await signInWithEmailAndPassword(email, password);
        // const { data } = await axios.post('https://sports-gear-server.herokuapp.com/login', { email });
        // console.log('access token', data);
        // localStorage.setItem('accessToken', data.accessToken);
        // navigate(from, { replace: true });
    }
    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Check your email to reset password.');
        }
        else {
            toast('Please enter your Email address!');
        }
    }
    return (
        <div className='font-montserat lg:h-screen'>
            <div className='flex flex-col justify-center items-center my-6'>
                <div>
                    <Link to='/'>
                        <img className='w-24' src={logo} alt="site logo" />
                    </Link>
                </div>
                <div>
                    <h1 className='text-xl'>Sport's Gear</h1>
                </div>
            </div>
            {/* <p className='text-center text-2xl font-medium my-6'>Please Login</p> */}
            <div className='flex flex-col items-center justify-center'>
                <form onSubmit={doLogIn} className='flex flex-col space-y-5'>
                    <input onBlur={getEmail} className='w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="email" name="email" id="" placeholder='Email' required />

                    <input onBlur={getPassword} className='w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="password" name="password" id="" placeholder='Password' required />

                    <input className='bg-sky-600  font-medium text-stone-100 rounded h-10 hover:cursor-pointer hover:bg-sky-700' type="submit" value="Login" />
                </form>

                <div className='flex w-80'>
                    <div className='text-sky-600 pt-3 font-medium  mr-3 tracking-tight'>
                        <Link to='/signup'>New to Sports Gear?</Link>
                    </div>
                    <div className='text-red-600 pt-3  tracking-tight'>
                        <button onClick={resetPassword} className='font-medium'>Forgot Password?</button>
                    </div>
                </div>

                <div className='h-6 pt-3'>
                    <p className='font-medium' style={{ color: 'red' }}>{error?.message || googleError?.message}</p>
                </div>
                {
                    loading && <Spinner></Spinner>
                }
                {
                    googleLoading && <Spinner></Spinner>
                }

                <hr className='w-80 mt-3 border-[1px] ' />
                <div onClick={() => signInWithGoogle()} className='flex items-center mt-6 hover:cursor-pointer rounded-sm bg-stone-100 mb-16 lg:mb-0'>
                    <div className='text-sky-600  bg-stone-100 p-2 rounded-full hover:bg-sky-600 hover:text-stone-100'>
                        <BsGoogle className='w-6 h-6 '></BsGoogle>
                    </div>
                    <div className='pr-2 pl-1'>
                        <p className='text-sky-600 font-medium'>Sign in with Google</p>
                    </div>
                </div>
                <ToastContainer />
            </div>

        </div>
    );
};

export default Login;