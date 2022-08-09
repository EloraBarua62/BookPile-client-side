import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../GoogleIcon.ico';

const GoogleAccount = () => {
    const [signInWithGoogle, user, loading, error, googleUser] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    let errorElement;

    if (loading) {
        return <div className='text-center mt-10 text-red-600'>loading...</div>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if(user || googleUser)
    {
        navigate(from, { replace: true });
    }

    return (
        <div className=''>
            <button onClick={() => signInWithGoogle()} className='text-amber-500 mx-auto bg-slate-800 px-3 py-3 rounded-full'>
                <img src={google} alt="" className='w-10 h-10 '/>
            </button>
            {errorElement}
        </div>
    );
};

export default GoogleAccount;