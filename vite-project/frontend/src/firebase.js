import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth , GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAkQwWIw0cYpQBj3uEs_xxwoe71nRsmI5o",
    authDomain: "addictsy-37206.firebaseapp.com",
    projectId: "addictsy-37206",
    storageBucket: "addictsy-37206.appspot.com",
    messagingSenderId: "756663577649",
    appId: "1:756663577649:web:ed6818fedb9890f3bf3910",
  };

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = GoogleAuthProvider()
