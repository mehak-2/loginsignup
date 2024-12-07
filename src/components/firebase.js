// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzielJvpI0QlyBCiKXpzILTTStptdz2q0",
  authDomain: "login-signup-382be.firebaseapp.com",
  projectId: "login-signup-382be",
  storageBucket: "login-signup-382be.firebasestorage.app",
  messagingSenderId: "1023994862624",
  appId: "1:1023994862624:web:31ee1646dbd21a386fb045"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;