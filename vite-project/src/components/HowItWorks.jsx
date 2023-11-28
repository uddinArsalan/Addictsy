import React from "react";
import phone from "../logo/icons8-telephone-64.png";
import live from "../logo/icons8-periscope-48.png";
import chat from "../logo/icons8-chat-room-96.png";
import frnd from "../logo/friends.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faMessage,
// } from "@fortawesome/free-solid-svg-icons";

// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#006492" fill-opacity="1" d="M0,32L80,42.7C160,53,320,75,480,96C640,117,800,139,960,133.3C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

// svg 2

// #006492
const Work = () => {
  return (
    <div id="howitworks">
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 369.29"><svg xmlns="http://www.w3.org/2000/svg" classname="bg-[#006492]" viewBox="0 0 1440 145.29" height="145.29" width="1440" y="0" ><path fill="#FCFCFC" fillopacity="1" d="M0,64L80,74.7C160,85,320,107,480,122.7C640,139,800,149,960,144C1120,139,1280,117,1360,106.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" classname="w-full" viewBox="0 96 1440 224" height="224" width="1440" y="145.29"><path fill="#006492" fillopacity="1" d="M0,96L80,112C160,128,320,160,480,176C640,192,800,192,960,181.3C1120,171,1280,149,1360,138.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg></svg> 
      <div className="flex flex-col items-center p-12 pb-0 bg-btn justify-around">
        <div className="text-white font-semibold text-4xl font-serif">
          How It Works
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-4 gap-8 mt-8">
          <div className="flex flex-col items-center">
            <div className="p-12 rounded-full bg-white w-16 relative mb-3">
              <div className="text-white flex items-center justify-center font-semibold rounded-full bg-bullets absolute top-0 left-0 w-6">
                1
              </div>
              <img src={phone} alt="" className="absolute top-4 right-3" />
            </div>
            <div className="text-white font-medium">
              Available 24/7: Dial 988 then Press 1, chat live, or text 838255.
            </div>
          </div>
         
          <div className="flex flex-col items-center">
            <div className="p-12 rounded-full flex bg-white w-16 relative mb-3">
              <div className="text-white flex items-center justify-center font-semibold rounded-full bg-bullets absolute top-0 left-0 w-6">
                2
              </div>
              <img src={live} alt="" className="absolute top-4 right-4 w-16" />
            </div>
            <div className="text-white font-medium">
              A caring, qualified responder will listen and help.
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="p-12 rounded-full relative bg-white w-16 mb-3 ">
              <div className="text-white flex items-center justify-center font-semibold rounded-full bg-bullets absolute top-0 left-0 w-6">
                3
              </div>
              <img src={chat} alt="" className="absolute top-4 right-4 w-16" />
            </div>
            <div className="text-white font-medium">
              Your call is free and confidential, and you decide how much
              information to share.
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="p-12 rounded-full bg-white relative w-16 mb-3">
              <div className="text-white flex items-center justify-center font-semibold rounded-full bg-bullets absolute top-0 left-0 w-6">
                4
              </div>
              <img src={frnd} alt="" className="absolute top-5 right-4 w-14" />
            </div>
            <div className="text-white font-medium">
              Support doesn't end with your conversation. Our responders connect
              you with resources that can help when you're in distress.
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#006492"
          fillOpacity="1"
          d="M0,64L80,74.7C160,85,320,107,480,122.7C640,139,800,149,960,144C1120,139,1280,117,1360,106.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default Work;
