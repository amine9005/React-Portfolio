// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7xDVy02nP-XPcBb3qKIGu_AkLPDd8BZ8",
  authDomain: "mohamed-amine-portfolio.firebaseapp.com",
  projectId: "mohamed-amine-portfolio",
  storageBucket: "mohamed-amine-portfolio.appspot.com",
  messagingSenderId: "723572776304",
  appId: "1:723572776304:web:a698444effcdeb23e543b5",
  measurementId: "G-1VW3EQ0HSL"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export default getFirestore() ; 
