// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsz01LsS7oxGgsdf6h_QFH0cyWmjL7gv8",
  authDomain: "app-game-9cec2.firebaseapp.com",
  projectId: "app-game-9cec2",
  storageBucket: "app-game-9cec2.appspot.com",
  messagingSenderId: "7745729925",
  appId: "1:7745729925:web:62b76601ddea8a0bff80ec",
  measurementId: "G-RTJ670N82D",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };