import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../GoogleIcon.ico';

const GoogleAccount = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if(user)
    navigate('/')

    return (
        <div>
            <button onClick={() => signInWithGoogle()}>
                <img src={google} alt="" />
            </button>
        </div>
    );
};

export default GoogleAccount;