// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANgmeMSi9Dbtx5czHGcF6IdozJ_2od6ys",
  authDomain: "tune-21a0a.firebaseapp.com",
  projectId: "tune-21a0a",
  storageBucket: "tune-21a0a.appspot.com",
  messagingSenderId: "426416239514",
  appId: "1:426416239514:web:36790aeee09926f2e20023",
  measurementId: "G-T781LGS118",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);

export const storage = getStorage();
