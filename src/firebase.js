// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {collection, getDocs, getFirestore } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYhE--hM2Imn12IwidbJAgGo4fFB1kyqg",
  authDomain: "entregareact-367a6.firebaseapp.com",
  projectId: "entregareact-367a6",
  storageBucket: "entregareact-367a6.appspot.com",
  messagingSenderId: "491933907413",
  appId: "1:491933907413:web:24de9d917e79b364a5e55c"
};

// Initialize Firebase
const firestore = initializeApp(firebaseConfig);
const db = getFirestore(firestore)

export default db