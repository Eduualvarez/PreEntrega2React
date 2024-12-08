import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_DATA_BASE_URL,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
  };


  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);


  /*
  apiKey: "AIzaSyCAXFygUR6rpA36Cja2tQiT6wwnrQDLdNM",
    authDomain: "ecommercereact-6453a.firebaseapp.com",
    databaseURL: "https://ecommercereact-6453a-default-rtdb.firebaseio.com",
    projectId: "ecommercereact-6453a",
    storageBucket: "ecommercereact-6453a.firebasestorage.app",
    messagingSenderId: "415307391012",
    appId: "1:415307391012:web:50e9e1dc40f251028778b1"








  */ 