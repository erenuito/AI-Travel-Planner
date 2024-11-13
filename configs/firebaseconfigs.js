// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth" ;
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "Your API KEY",
    authDomain: "ai-travel-planner-dab18.firebaseapp.com",
    projectId: "ai-travel-planner-dab18",
    storageBucket: "ai-travel-planner-dab18.appspot.com",
    messagingSenderId: "765715687773",
    appId: "1:765715687773:web:a16e1d216a29c121c160b4",
    measurementId: "G-HFQ6NWDJH4"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
