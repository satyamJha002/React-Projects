// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe82B9d9FfIJmYSR9IyoYa3wEEaPU4CD0",
  authDomain: "contact-app-cfdba.firebaseapp.com",
  projectId: "contact-app-cfdba",
  storageBucket: "contact-app-cfdba.appspot.com",
  messagingSenderId: "178757396342",
  appId: "1:178757396342:web:b1430c657c708a3adb3c57",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
