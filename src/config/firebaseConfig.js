// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"



export const firebaseConfig = {
  apiKey: "AIzaSyBYUxstyREO-U1rgJA8aMSwHTJezKbZmg4",
  authDomain: "flexigram-aaa54.firebaseapp.com",
  projectId: "flexigram-aaa54",
  storageBucket: "flexigram-aaa54.firebasestorage.app",
  messagingSenderId: "811944197034",
  appId: "1:811944197034:web:9d1f9003c0ccf74e9489d3",
  measurementId: "G-S8Z1Z0712L"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app)
