// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3LioZmF5ZbfQ4DH2eXSVhyaU2J4ztd9Y",
  authDomain: "tronix-6efb9.firebaseapp.com",
  projectId: "tronix-6efb9",
  storageBucket: "tronix-6efb9.appspot.com",
  messagingSenderId: "104030681048",
  appId: "1:104030681048:web:7122bded759ca62e6924ad",
  measurementId: "G-J70DRY8Z9Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// export const db = getFirestore()
export const auth = getAuth()
export const db = getDatabase();
