// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDngC4CBV8SJg-sq1_gM3-3VaBmM_6Xb0o",
  authDomain: "react-ecommerce-66f17.firebaseapp.com",
  projectId: "react-ecommerce-66f17",
  storageBucket: "react-ecommerce-66f17.firebasestorage.app",
  messagingSenderId: "668706143067",
  appId: "1:668706143067:web:be91bc1e4cc4019899387e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);