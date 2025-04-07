// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth, onAuthStateChanged, setPersistence, browserLocalPersistence} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";


export const firebaseConfig = {
  apiKey: "AIzaSyBkjq9ZfVH50HXAmNUV1l_P4C6EIvwF8W4",
  authDomain: "flexig-38673.firebaseapp.com",
  projectId: "flexig-38673",
  storageBucket: "flexig-38673.firebasestorage.app",
  messagingSenderId: "763246097295",
  appId: "1:763246097295:web:b3b89fa6eacb09540011fa",
  measurementId: "G-F7JLWCQTRN"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); 

setPersistence(auth, browserLocalPersistence)
  .then(() => console.log("Auth persistence enabled"))
  .catch((error) => console.error("Persistence error:", error));

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is logged in:", user);
  } else {
    console.log("No user is logged in.");
  }
});
