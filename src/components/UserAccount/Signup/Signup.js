// import React, { useRef, useState } from 'react';
// import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
// import auth from '../../../firebase.init';

// const Signup = () => {

//     const nameRef = useRef('');
//     const emailRef = useRef('');
//     const passRef = useRef('');
//     const conPassRef = useRef('');

//     const [
//         createUserWithEmailAndPassword,
//         user,
//         loading,
//         error,
//     ] = useCreateUserWithEmailAndPassword(auth);


//     const [sendEmailVerification, sending] = useSendEmailVerification(auth);


//     const navigate = useNavigate();
//     let errorMessage;
//     const [passwordError, setPasswordError] = useState('')


//     const handleForm = event =>{
//         event.preventDefault();
//         const name = nameRef.current.value;
//         const email = emailRef.current.value;
//         const password = passRef.current.value;
//         const confirm_password = conPassRef.current.value;


//         if (password === confirm_password) {
//             createUserWithEmailAndPassword(email, password);
//             navigate('/');
//         }
//         else
//             setPasswordError("Password didn't match");
//     }

//     if(error)
//         errorMessage = <p className='text-red-600'>{error.message}</p>


//     return(
//         <div className="h-screen bg-cover bg-[url('https://img.freepik.com/free-photo/young-student-working-assignment_23-2149257248.jpg?w=740&t=st=1651814498~exp=1651815098~hmac=d49a39ef89505279e346fbbe7b8c8da17bf2dc974dcfb099c7927f601e74ca1b')]">
//             <form onSubmit={handleForm} className="w-1/2 h-4/5 bg-slate-900">
//                 <input type="text" name="name" ref={nameRef} className='w-3/5 h-10 m-3 rounded-lg pl-3' required placeholder='Name' />
//                 <input type="email" name="email" ref={emailRef} className='w-3/5 h-10 m-3 rounded-lg pl-3' required placeholder='Email' />
//                 <input type="password" name="password" ref={passRef} className='w-3/5 h-10 m-3 rounded-lg pl-3' required placeholder='Password' />
//                 <input type="password" name="confirm_password" ref={conPassRef} className='w-3/5 h-10 m-3 rounded-lg pl-3' required placeholder='Confirm password' />
//                 {errorMessage}
//                 <input onClick={async () => {
//                     await sendEmailVerification();

//                 }} type="submit" value="Create account" className='w-3/5 h-10 m-3 border border-2 text-white hover:text-white border border-amber-900 hover:bg-amber-900 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-md px-5 py-1.5 text-center mr-2 mb-2 dark:border-amber-600 dark:text-amber-400 dark:hover:text-white dark:hover:bg-amber-600 dark:focus:ring-amber-800'/>
//                 {/* <button type="button" class="text-amber-900 hover:text-white border border-amber-800 hover:bg-amber-900 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-amber-600 dark:text-amber-400 dark:hover:text-white dark:hover:bg-amber-600 dark:focus:ring-amber-800">Update</button> */}
            
//             <p className='text-red-600'>{passwordError? passwordError:''}</p>
//             </form>
//         </div>
        
//     );
// };

// export default Signup;