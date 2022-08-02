// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe5sqSAuVmPhosSTAHNsstlTqNORqRzPs",
  authDomain: "royal-app-f6c99.firebaseapp.com",
  projectId: "royal-app-f6c99",
  storageBucket: "royal-app-f6c99.appspot.com",
  messagingSenderId: "710063131000",
  appId: "1:710063131000:web:44f86881d33f4cf314208d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 