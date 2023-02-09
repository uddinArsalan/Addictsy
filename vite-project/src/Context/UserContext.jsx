import React, { createContext, useContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  //   signInWithEmailAndPassword,
  //   signOut,
  //   onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();
const AuthSignUpContext = createContext();
const AuthError = createContext();
const AuthLoginContext = createContext();
// import * as admin from 'firebase-admin'
// import * as funcions from "firebase-functions"
// import { StreamChat } from 'stream-chat'

// admin.initializeApp();
// const serverClient = StreamChat.getInstance(
//   "8pm3nq4a7zde",
//   "ga3xcpyduzxsnbkq8c346xns9q7kt9p5twr59f5ryvfmjua9tbpxepnth9q8em5f"
// )

// // When a user is created in Firebase an associated Stream acount is also created
// export const createStreamUser = funcions.auth.user().onCreate(async (user) => {
//   funcions.logger.log("Firebase user created",user)
//   const response = await serverClient.upsertUser({
//     id : user.id,
//     name : user.displayName,
//     email : user.email,
//     image : user.photoURL,
//   });
//   funcions.logger.log("Stream user created",response);
//   return response;
// })

export function useAuthContext() {
  return useContext(AuthContext);
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

  initializeApp(firebaseConfig);

  const auth = getAuth();
  const [error, setError] = useState({
    isError: false,
    errorMsg: "",
  });
  const [users, setUser] = useState({
    id: "",
    name: "",
    image: "",
  });
  const navigate = useNavigate();
  function signUp(e) {
    e.preventDefault();
    console.log(navigate);
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const phoneNumber = document.querySelector("#Mob").value;
    const photoURL =
      "https://getstream.io/random_png/?id=autumn-lake-3&name=autumn-lake-3";
    const displayName = document.querySelector("#name").value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log("User added succcessfully");
        cred.user.displayName = displayName;
        cred.user.photoURL = photoURL;
        cred.user.phoneNumber = phoneNumber;
        setError(() => {
          return {
            isError: "",
            errorMsg: "",
          };
        });
        setUser((prevUser) => {
          return {
            id: cred.user.uid,
            name: displayName,
            image: "https://source.unsplash.com/random/50x50/?profile",
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

  function signIn(e) {
    e.preventDefault();
    const email = document.querySelector("#emailLogin").value;
    const password = document.querySelector("#passwordLogin").value;
    signInWithEmailAndPassword(auth,email, password)
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
    <AuthContext.Provider value={users}>
      <AuthSignUpContext.Provider value={signUp}>
        <AuthError.Provider value={{value : [error,setError]}}>
          <AuthLoginContext.Provider value={signIn}>
            {children}
          </AuthLoginContext.Provider>
        </AuthError.Provider>
      </AuthSignUpContext.Provider>
    </AuthContext.Provider>
  );
};
