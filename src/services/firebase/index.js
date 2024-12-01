import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCAXFygUR6rpA36Cja2tQiT6wwnrQDLdNM",
    authDomain: "ecommercereact-6453a.firebaseapp.com",
    databaseURL: "https://ecommercereact-6453a-default-rtdb.firebaseio.com",
    projectId: "ecommercereact-6453a",
    storageBucket: "ecommercereact-6453a.firebasestorage.app",
    messagingSenderId: "415307391012",
    appId: "1:415307391012:web:50e9e1dc40f251028778b1"
  };


  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);