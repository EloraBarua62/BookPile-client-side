import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { BookmarkIcon, BookOpenIcon, MenuIcon, XIcon } from '@heroicons/react/solid'
import './Header.css'
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import image from '../../../images/book library.ico'

const Header = () => {

    const [user, loading, error] = useAuthState(auth);

    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth);
        navigate('/');
    }

    let list;
    // const handleMenu = () => {
    //     setOpen(!open);
    // }
    // const handleMenu = () => {
    //     setOpen(!open);
    //     list = document.querySelector('ul');
    //     if(open){
    //         list.classList.add('top-[80px]')
    //     }
    //     else{
    //         list.classList.remove('top-[80px]')
    //     }

    // }
    const [short, setShort] = useState(false);
    // const handleMenu = () => {
    //     setOpen(!open);
    //     setShort(true);
    // }


    return (
        <nav className='px-5 py-2 bg-gray-800 shadow-2xl shadow-black lg:flex lg:justify-between lg:items-center sticky top-0'>
            <>
                <div className='flex justify-between items-center'>
                    <span className='text-3xl font-bold text-white mr-2'>
                        <img src={image} className='w-14 inline mr-2' />
                        BookPile
                    </span>
                    <span className='w-10 cursor-pointer lg:hidden block text-white'>
                        {open ? <XIcon onClick={() => setOpen(false)}></XIcon> : <MenuIcon onClick={() => setOpen(true)}></MenuIcon>}
                    </span>
                </div>
                <ul className='hidden lg:flex lg:items-center top-[-400px] transition-all ease-in duration-500'>
                    {/* {
                    open ? list.classList.add('top-[80px]') : list.classList.remove('top-[80px]')
                } */}
                    <li className='text-center my-6 lg:my-0 lg:mx-4 py-1 rounded-xl bg-slate-700 lg:bg-transparent'>
                        <NavLink to='/' className='text-xl font-semibold text-white hover:text-amber-400 duration-500'>Home</NavLink>
                    </li>
                    <li className='text-center my-6 lg:my-0 lg:mx-4 py-1 rounded-xl bg-slate-700 lg:bg-transparent'>
                        <NavLink to='/manage_inventory' className='text-xl font-semibold text-white hover:text-amber-400 duration-500'>Manage Books</NavLink>
                    </li>
                    <li className='text-center my-6 lg:my-0 lg:mx-4 py-1 rounded-xl bg-slate-700 lg:bg-transparent'>
                        <NavLink to='/add_inventory' className='text-xl font-semibold text-white hover:text-amber-400 duration-500'>Add Books</NavLink>
                    </li>
                    <li className='text-center my-6 lg:my-0 lg:mx-4 py-1 rounded-xl bg-slate-700 lg:bg-transparent'>
                        <NavLink to='/my_items' className='text-xl font-semibold text-white hover:text-amber-400 duration-500'>My Items</NavLink>
                    </li>
                    <li className='text-center my-6 lg:my-0 lg:mx-4 py-1 rounded-xl bg-slate-700 lg:bg-transparent'>
                        <NavLink to='/aboutus' className='text-xl font-semibold text-white hover:text-amber-400 duration-500'>About Us</NavLink>
                    </li>
                    

                </ul>
            </>
            <>
                <ul className='hidden lg:flex lg:items-center top-[-400px] transition-all ease-in duration-500'>
                    <li className='text-center my-6 lg:my-0 lg:mx-4 py-1 rounded-xl bg-slate-700 lg:bg-transparent'>
                        {
                            user ?
                                <button onClick={handleSignOut} className='text-xl font-semibold text-white hover:text-amber-400 duration-500'>Log out</button>
                                :
                                <NavLink to='/login' className='text-xl font-semibold text-white hover:text-amber-400 duration-500'>Login</NavLink>
                        }

                    </li>
                </ul>
            </>

            {
                open && <ul className='lg:hidden top-[80px] opacity-100'>
                    {/* {
                    open ? list.classList.add('top-[80px]') : list.classList.remove('top-[80px]')
                } */}
                    <li className='text-center my-6 lg:my-0 lg:mx-4 py-1 rounded-xl bg-slate-700 lg:bg-transparent'>
                        <NavLink to='/' className='text-xl font-semibold text-white hover:text-amber-400 duration-500'>Home</NavLink>
                    </li>
                    <li className='text-center my-6 lg:my-0 lg:mx-4 py-1 rounded-xl bg-slate-700 lg:bg-transparent'>
                        <NavLink to='/manage_inventory' className='text-xl font-semibold text-white hover:text-amber-400 duration-500'>Manage Books</NavLink>
                    </li>
                    <li className='text-center my-6 lg:my-0 lg:mx-4 py-1 rounded-xl bg-slate-700 lg:bg-transparent'>
                        <NavLink to='/add_inventory' className='text-xl font-semibold text-white hover:text-amber-400 duration-500'>Add Books</NavLink>
                    </li>
                    <li className='text-center my-6 lg:my-0 lg:mx-4 py-1 rounded-xl bg-slate-700 lg:bg-transparent'>
                        <NavLink to='/my_items' className='text-xl font-semibold text-white hover:text-amber-400 duration-500'>My Items</NavLink>
                    </li>
                    <li className='text-center my-6 lg:my-0 lg:mx-4 py-1 rounded-xl bg-slate-700 lg:bg-transparent'>
                        <NavLink to='/aboutus' className='text-xl font-semibold text-white hover:text-amber-400 duration-500'>About Us</NavLink>
                    </li>
                    <li className='text-center my-6 lg:my-0 lg:mx-4 py-1 rounded-xl bg-slate-700 lg:bg-transparent'>
                        {
                            user ?
                                <button onClick={handleSignOut} className='text-xl font-semibold text-white hover:text-amber-400 duration-500'>Log out</button>
                                :
                                <NavLink to='/login' className='text-xl font-semibold text-white hover:text-amber-400 duration-500'>Login</NavLink>
                        }

                    </li>

                </ul>
            }

        </nav>
















        // < !--This example requires Tailwind CSS v2.0 + -->
        // <nav className="bg-gray-800">
        //     <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        //         <div className="relative flex items-center justify-between h-16">
        //             <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        //                 {/* <!-- Mobile menu button--> */}
        //                 <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
        //                     {/* <span className="sr-only">Open main menu</span> */}
        //                     {/* <!-- */}
        //                     {/* Icon when menu is closed.

        //                     Heroicon name: outline/menu

        //                     Menu open: "hidden", Menu closed: "block"
        //                       --> */}
        //                     {/* <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
        //                         <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        //                     </svg> */}
        //                     {/* <!--
        //                     Icon when menu is open.

        //                     Heroicon name: outline/x

        //                     Menu open: "block", Menu closed: "hidden"
        //                         --> */}
        //                     {/* <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
        //                         <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        //                     </svg> */}
        //                 </button>
        //             </div>
        //             <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        //                 <div onClick={() => setOpen(!open)} className="w-6 h-6 sm:hidden text-white">
        //                     {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
        //                 </div>
        //                 <div className="flex-shrink-0 flex items-center">
        //                     {/* <img className="block lg:hidden h-8 w-auto bg-white" src={image} alt="Workflow"></img> */}

        //                     {/* <img className="hidden lg:block  h-8 w-auto bg-white" src={image} alt="Workflow"></img> */}
        //                     <BookOpenIcon className='w-20 h-10 mr-4 text-white' to='/'></BookOpenIcon>
        //                     <h1 className='text-white text-3xl font-bold'>BookPile</h1>
        //                 </div>


        //                 <div className="hidden sm:block sm:ml-6">
        //                     <div className="flex space-x-4 ">
        //                         {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
        //                         {/* <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</a>

        //                         <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Inventory</a>

        //                         <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Manage Books</a>

        //                         <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add Books</a> */}
        //                         <NavLink to='/' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</NavLink>
        //                         {/* <NavLink to='/inventory/:id' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Inventory</NavLink> */}
        //                         <NavLink to='/manage_inventory' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Manage Books</NavLink>
        //                         <NavLink to='/add_inventory' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add Books</NavLink>
        //                         <NavLink to='/my_items' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">My items</NavLink>
        //                         {/* <NavLink to='/blogs' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blogs</NavLink> */}
        //                         <NavLink to='/aboutus' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About us</NavLink>





        //                     </div>
        //                     {/* <div className="absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"> */}

        //                 </div>

        //             </div>

        //             <div className="absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        //                 {
        //                     user ?
        //                         <button onClick={handleSignOut} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign out</button>

        //                         :
        //                         <NavLink to='/login' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</NavLink>

        //                 }


        //                 {/* <button type="button" className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
        //                     <span className="sr-only">View notifications</span>
        //                     {/* <!-- Heroicon name: outline/bell --> 
        //                     <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
        //                         <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        //                     </svg>
        //                 </button>

        //                 {/* <!-- Profile dropdown --> 
        //                 <div className="ml-3 relative">
        //                     <div>
        //                         <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
        //                             <span className="sr-only">Open user menu</span>
        //                             <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
        //                         </button>
        //                     </div> */}

        //                 {/* <!--
        //                         Dropdown menu, show/hide based on menu state.

        //                         Entering: "transition ease-out duration-100"
        //                         From: "transform opacity-0 scale-95"
        //                         To: "transform opacity-100 scale-100"
        //                         Leaving: "transition ease-in duration-75"
        //                         From: "transform opacity-100 scale-100"
        //                         To: "transform opacity-0 scale-95"
        //                                 --> */}
        //                 {/* <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
        //                         {/* <!-- Active: "bg-gray-100", Not Active: "" --> 
        //                         <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
        //                         <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
        //                         <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
        //                     </div> */}
        //                 {/* </div> */}
        //             </div>

        //         </div>
        //     </div>


        //     {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        //     <div className="sm:hidden" id="mobile-menu">
        //         <div className={`z-50 px-2 pt-2 pb-3 space-y-1 w-full bg-gray-500 absolute ${open ? 'top-15' : 'top-[-420px]'}`}>
        //             {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
        //             <Link to='/' className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</Link>

        //             <Link to='/manage_inventory' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Manage Books</Link>
        //             <Link to='/add_inventory' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Inventory</Link>

        //             <Link to='/my_items' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Add books</Link>

        //             <Link to='/blogs' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">My Items</Link>
        //             <Link to='/aboutus' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About us</Link>
        //             <Link to='/login' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Login</Link>

        //             {/* <NavLink as={Link} to='/' className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</NavLink>
        //             <NavLink as={Link} to='/inventory/:id' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Inventory</NavLink>
        //             <NavLink as={Link} to='/manage_inventory' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Manage Books</NavLink>
        //             <NavLink as={Link} to='/add_inventory' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add Books</NavLink>
        //             <NavLink as={Link} to='/my_items' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">My items</NavLink>
        //             <NavLink as={Link} to='/blogs' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blogs</NavLink> */}
        //         </div>
        //     </div>
        // </nav >
    );
};


export default Header;