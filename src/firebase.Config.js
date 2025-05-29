// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMNYnLyDgTAvQHBjRwudljkgHSFsVh41g",
  authDomain: "auth--test-f9ae1.firebaseapp.com",
  projectId: "auth--test-f9ae1",
  storageBucket: "auth--test-f9ae1.firebasestorage.app",
  messagingSenderId: "896080573254",
  appId: "1:896080573254:web:ab0a54dbf263aab6ba2b47",
  measurementId: "G-Y9DJ411W80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

export {auth, googleProvider}