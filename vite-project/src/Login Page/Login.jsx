import React, { useState } from "react";
import Nav from "./Nav";
import {
  useAuthError,
  useAuthLoginContext,
  useAuthSignUpContext,
} from "../Context/UserContext";
// import logo from '../logo/png/logo-black.png'

const Login = () => {
  const { error,setError } = useAuthError();
  // const [error, setError] = value;
  const [formData, setFormData] = useState({
    name: "",
    mobileNo: "",
    email: "",
    password: "",
  });

  const [user, setUser] = useState({
    signUp: false,
    signIn: true,
  });

  // function loadFile(e){
  //   const img = document.querySelector(".img")
  //   const src = URL.createObjectURL(e.target.files[0]);
  //   img.src = src;
  //   console.log(img.src)
  //   localStorage.setItem("imgSrc",img.src)
  // }

  const signInStyle = {
    background: user.signIn ? "#FCFCFC" : "#003F72",
    color: user.signIn ? "black" : "white",
  };

  const signUpStyle = {
    background: user.signUp ? "#FCFCFC" : "#003F72",
    color: user.signUp ? "black" : "white",
  };

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }
  const signUp = useAuthSignUpContext();
  const signIn = useAuthLoginContext();
  return (
    <div className="">
      <Nav />
      <div className="bg-textColor relative flex justify-center p-8">
        <div className="bg-bodyBG rounded-md relative min-w-fit w-2/4">
          <div
            style={signUpStyle}
            className="text-center font-semibold text-2xl top-0 left-0 w-1/2 p-4 cursor-pointer"
            onClick={() => {
              setError(() => {
                return {
                  isError: "",
                  errorMsg: "",
                };
              });
              setUser((prev) => {
                return {
                  signIn: false,
                  signUp: true,
                };
              });
            }}
          >
            Sign Up
          </div>
          <div
            style={signInStyle}
            className="text-center font-semibold text-2xl absolute top-0 right-0 w-1/2 p-4 cursor-pointer"
            onClick={() => {
              setError(() => {
                return {
                  isError: "",
                  errorMsg: "",
                };
              });
              setUser((prev) => {
                return {
                  signIn: true,
                  signUp: false,
                };
              });
            }}
          >
            Sign In
          </div>
          <form className="form rounded-md p-8 min-h-fit">
            {error.isError && (
              <div className="p-2 bg-red-400 relative rounded-lg text-white">
                {error.errorMsg}
              </div>
            )}
            {user.signUp ? (
              <div className="flex flex-col gap-4 ">
                <div className="text-2xl font-bold text-blue-600">New User ? <span className="text-blue-900 underline">SignUp</span> </div>
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-xl font-semibold">
                    Name:{" "}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-2 border-gray-300 border-2 rounded-lg w-full"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="Mob" className="text-xl font-semibold">
                    Mobile Number:{" "}
                  </label>
                  <input
                    type="number"
                    name="mobileNo"
                    id="Mob"
                    placeholder="Mobile Number"
                    onChange={handleChange}
                    value={formData.mobileNo}
                    className=" p-2 border-gray-300 border-2 rounded-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-xl font-semibold">
                    Email Address:{" "}
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    onChange={handleChange}
                    value={formData.email}
                    className="p-2 border-gray-300 border-2 rounded-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="password" className="text-xl font-semibold">
                    Password :{" "}
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={formData.password}
                    className="p-2 border-gray-300 border-2 rounded-lg"
                  />
                </div>
                <button
                  className="bg-btn p-2 rounded-md text-white text-center border-menuBtn border-2"
                  onClick={signUp}
                >
                  Sign Up
                </button>
              </div>
            ) : (
              <>
              <div className="flex flex-col gap-4 ">
                <div className="text-2xl font-bold text-blue-600">Already Registered ? <span className="text-blue-900 underline">Login</span> </div>
                <div className="flex flex-col">
                  <label htmlFor="emailLogin" className="font-semibold text-xl">
                    Email :{" "}
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="emailLogin"
                    placeholder="Email Address"
                    className="p-2 border-gray-300 border-2 rounded-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="passwordLogin"
                    className="font-semibold text-xl"
                  >
                    Password:{" "}
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="passwordLogin"
                    placeholder="Password"
                    className="p-2 border-gray-300 border-2 rounded-lg"
                  />
                </div>
                <button
                  className="bg-btn p-2 rounded-md text-white text-center border-menuBtn border-2"
                  onClick={signIn}
                >
                  Sign In
                </button>
              </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
{/* <div>
            <div className="relative md:w-96 w-52 cursor-pointer h-10 mt-0">
              <div className="absolute flex justify-between md:w-96 p-2 cursor-pointer border-gray-300 border-2 rounded-lg">
                <div className="font-semibold flex items-center text-textColor">Choose your Profile Pic</div>
                <div><img src="https://talkjs.com/images/avatar-1.jpg" alt="" className="rounded-full w-12 img"/></div>
              </div>
              <label htmlFor="image"></label>
              <input
                type="file"
                name="image"
                id="image"
                className="md:w-96 p-2 z-2 opacity-0 absolute border-gray-300 border-2 rounded-lg cursor-pointer"
                onChange={loadFile}
              />
            </div>
            </div> */}