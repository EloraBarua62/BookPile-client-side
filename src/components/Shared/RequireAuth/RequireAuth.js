import React from 'react';
import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth"
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init"
import Loading from "../Loading/Loading"

const RequireAuth = ({children}) => {
    const [user,loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if(loading)
        return <Loading></Loading>
    
    if(!user)
       {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
       } 
    
    // if(!user.emailVerified){
    //        return <div>
    //            <button onClick={async () => {
    //                await sendEmailVerification();
    //                alert('sent email');
    //            }
    //            }>send verification</button>
    //        </div>
    // }

    return children;
};

export default RequireAuth;