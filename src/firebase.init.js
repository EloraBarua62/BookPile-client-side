// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCP8IG2ywUE5BM5LYNqjgRnsxdCoXiuzfs",
    authDomain: "bookpile-66c24.firebaseapp.com",
    projectId: "bookpile-66c24",
    storageBucket: "bookpile-66c24.appspot.com",
    messagingSenderId: "418586445434",
    appId: "1:418586445434:web:74f68860aa4cde25c25dc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;