import { faArrowRight, faMessage, faMobile, faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#003F72"
          fillOpacity="1"
          d="M0,96L80,112C160,128,320,160,480,176C640,192,800,192,960,181.3C1120,171,1280,149,1360,138.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          className="rounded-br-full rounded-bl-full"
          ></path>
      </svg>
        <div className="bg-FooterCol p-24 flex justify-around items-center flex-col">
            <div className="text-white font-bold text-3xl">Get Help Now</div>
            <div className="grid mt-10 md:grid-cols-3 grid-cols-1 gap-6">
                <div className="flex flex-col items-center justify-center">

                <div className="w-48 p-4 md:flex justify-around items-center bg-white rounded-3xl hidden">
                    <div className=""><FontAwesomeIcon icon={faPhone} className="text-textColor fa-lg"/></div>
                    <div className="text-textColor font-bold text-3xl">Call</div>
                    <div className=""><FontAwesomeIcon icon={faArrowRight} className="text-textColor"/></div>
                </div>
                    <div className="flex flex-col items-center justify-center md:mt-16">
                        <div className="text-white font-semibold text-2xl">Find Resources</div>
                        <div className="text-white text-sm hover:underline cursor-pointer">Local Resources</div>
                        <div className="text-white text-sm hover:underline cursor-pointer">Government Support</div>
                    </div>
                 </div>
                 <div className="flex flex-col items-center justify-center">  
                <Link to="chat"><div className="w-48 p-4 md:flex hidden justify-around items-center bg-white rounded-3xl">
                    <div><FontAwesomeIcon icon={faMessage} className="text-textColor fa-lg"/></div>
                    <div className="text-textColor font-bold text-2xl">Chat</div>
                    <div className=""><FontAwesomeIcon icon={faArrowRight} className="text-textColor"/></div>
                </div>
                </Link>

                <div className=" flex flex-col items-center justify-center md:mt-10">
                        <div className="text-white font-semibold text-2xl">About Us</div>
                        <div className="text-white text-sm hover:underline cursor-pointer">About Us</div>
                        <div className="text-white text-sm hover:underline cursor-pointer">How It Works</div>
                        <div className="text-white text-sm hover:underline cursor-pointer">Privacy and Security</div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                <div className="w-48 p-4 md:flex hidden justify-around items-center bg-white rounded-3xl">
                    <div className=""><FontAwesomeIcon icon={faMobile} className="text-textColor fa-lg"/></div>
                    <div className="text-textColor font-bold text-2xl">Text</div>
                    <div className=""><FontAwesomeIcon icon={faArrowRight} className="text-textColor"/></div>
                </div>
                <div className="flex flex-col items-center justify-center md:mt-16">
                        <div className="text-white font-semibold text-2xl">Show Support</div>
                        <hr className="bg-red-700"/>
                        <div className="text-white text-sm hover:underline cursor-pointer">Reach Out</div>
                        <div className="text-white text-sm hover:underline cursor-pointer">Spread the Word</div>
                    </div>
                </div>

            </div>
                <div className=" text-white mt-16">Your personal information and phone number will be used only for referral to local care with your permission, in case of emergency, or as required by law. &nbsp;</div>
                <div className="text-white font-semibold mt-6">&copy; All Rights Reserved</div>
        </div>
            </div>
        //   </div>
    )
}

export default Footer