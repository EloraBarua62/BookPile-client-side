import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../GoogleIcon.ico';

const GoogleAccount = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if (loading) {
        return <div className='text-center mt-10'>loading...</div>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if(user)
    {
        navigate('/');
    }

    return (
        <div>
            <button onClick={() => signInWithGoogle()}>
                <img src={google} alt="" />
            </button>
            {errorElement}
        </div>
    );
};

export default GoogleAccount;