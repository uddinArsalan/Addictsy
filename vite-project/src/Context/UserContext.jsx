import React, { createContext, useContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set, onValue, push } from "firebase/database";

const AuthSignUpContext = createContext();
const AuthError = createContext();
const AuthLoginContext = createContext();
const UserDataContext = createContext();

export function useUsersDataContext() {
  return useContext(UserDataContext);
}

export function useAuthError() {
  return useContext(AuthError);
}

export function useAuthSignUpContext() {
  return useContext(AuthSignUpContext);
}

export function useAuthLoginContext() {
  return useContext(AuthLoginContext);
}

export const UserContext = ({ children }) => {
  const firebaseConfig = {
    apiKey: "AIzaSyAkQwWIw0cYpQBj3uEs_xxwoe71nRsmI5o",
    authDomain: "addictsy-37206.firebaseapp.com",
    projectId: "addictsy-37206",
    storageBucket: "addictsy-37206.appspot.com",
    messagingSenderId: "756663577649",
    appId: "1:756663577649:web:ed6818fedb9890f3bf3910",
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const auth = getAuth();
  const [error, setError] = useState({
    isError: false,
    errorMsg: "",
  });

  const navigate = useNavigate();
  function signUp(e) {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const displayName = document.querySelector("#name").value;
    // console.log(email,displayName,password)
    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log("User added succcessfully");
        setError(() => {
          return {
            isError: "",
            errorMsg: "",
          };
        });

        const user = {
          id: uuidv4(),
          name: displayName,
          photoUrl: "https://source.unsplash.com/random/?profile",
          role: "default",
        };

        
        const dbRef = ref(db, `users/${auth.currentUser.uid}`);
        set(dbRef, user);
        navigate("chat");
      })
      .catch((err) => {
        setError(() => {
          return {
            errorMsg: err.message,
            isError: true,
          };
        });
      });
  }

  function signIn(e) {
    e.preventDefault();
    const email = document.querySelector("#emailLogin").value;
    const password = document.querySelector("#passwordLogin").value;
    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log("User Logged in succcessfully");

        setError(() => {
          return {
            isError: "",
            errorMsg: "",
          };
        });

        navigate("chat");
      })
      .catch((err) => {
        setError(() => {
          return {
            errorMsg: err.message,
            isError: true,
          };
        });
      });
  }

  return (
    <AuthSignUpContext.Provider value={signUp}>
      <AuthError.Provider value={{ error, setError }}>
        <AuthLoginContext.Provider value={signIn}>
          <UserDataContext.Provider value={{auth,onValue,db,ref}}>
            {children}
          </UserDataContext.Provider>
        </AuthLoginContext.Provider>
      </AuthError.Provider>
    </AuthSignUpContext.Provider>
  );
};
