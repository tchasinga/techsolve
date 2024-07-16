// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGW6Ub1W4dewLsbjFU7QOZ5PHvTLLnvsk",
  authDomain: "applyingside.firebaseapp.com",
  projectId: "applyingside",
  storageBucket: "applyingside.appspot.com",
  messagingSenderId: "589012084563",
  appId: "1:589012084563:web:c3778d1d0a6a7b4bbba3a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;