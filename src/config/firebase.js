import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCsz01LsS7oxGgsdf6h_QFH0cyWmjL7gv8',
  authDomain: 'app-game-9cec2.firebaseapp.com',
  projectId: 'app-game-9cec2',
  storageBucket: 'app-game-9cec2.appspot.com',
  messagingSenderId: '7745729925',
  appId: '1:7745729925:web:62b76601ddea8a0bff80ec',
  measurementId: 'G-RTJ670N82D',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };