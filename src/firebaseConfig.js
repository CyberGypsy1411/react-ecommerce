// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOHp67t3z6Xjze5FMcRCI_qg-6jgN0Cpo",
  authDomain: "astha-collection.firebaseapp.com",
  projectId: "astha-collection",
  storageBucket: "astha-collection.firebasestorage.app",
  messagingSenderId: "137621070884",
  appId: "1:137621070884:web:25d52acd849901b4fce4b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);