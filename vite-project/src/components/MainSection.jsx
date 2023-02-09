import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMessage,
  faMobile,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
// import main from "../logo/main.jpg";
import clock from "../logo/wall-clock.png";
import live from "../logo/live.png";
import frnd from "../logo/friends.png";
import { Link } from "react-router-dom";

const MainSection = ({ menu }) => {
  return (
    <>
      {menu && (
        <div className="flex flex-col p-8 rounded-lg shadow-2xl m-3 border-gray-500 justify-evenly">
          <div className="text-lg text-textColor font-semibold mb-3">
            How We Help
            <span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-dropDownArrow ml-2"
              />
            </span>
          </div>
          <div className="text-lg text-textColor font-semibold mb-3">
            Sign of Crisis
            <span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-dropDownArrow ml-2"
              />
            </span>
          </div>
          <div className="text-lg text-textColor font-semibold mb-3">
            Resources and Support
            <span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-dropDownArrow ml-2"
              />
            </span>
          </div>
          <div className="text-lg text-textColor font-semibold">
            About
            <span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-dropDownArrow ml-2"
              />
            </span>
          </div>
          <div className="p-2 w-4/5 md:w-3/5 mb-4 mt-4 bg-menuBtn flex justify-evenly rounded-full items-center text-bold text-white text-xl hover:bg-blue-900 cursor-pointer">
            <span>
              <FontAwesomeIcon icon={faPhone} />
            </span>
            Dial 988 then Press 1
          </div>
          <Link to="login"><div className="mb-6 w-4/5 md:w-3/5 p-2 bg-menuBtn flex justify-evenly rounded-full items-center text-bold text-white text-xl mr-6 cursor-pointer hover:bg-blue-900">
            <span>
              <FontAwesomeIcon icon={faMessage} />
            </span>
            Chat
          </div>
          </Link>
          <div className=" p-2 w-4/5 md:w-3/5 bg-menuBtn flex justify-evenly rounded-full items-center text-bold text-white text-xl cursor-pointer hover:bg-blue-900">
            <span>
              <FontAwesomeIcon icon={faMobile} />
            </span>
            Text Us
          </div>
        </div>
      )}
      <div className="lg:mt-24 mt-8">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="flex flex-col lg:pt-48 lg:p-24 p-6">
            <div className="font-bold md:text-5xl text-4xl text-textColor mb-6">
              24/7, confidential crisis support
            </div>
            <div className="font-semibold text-lg text-gray-700 mb-6">
              One small step is worth more than a thousand steps planned. -
              <i>Unknown</i>
              <hr className="bg-red-700" />
            </div>
            <div className="p-2 w-60 bg-btn flex justify-evenly rounded-full items-center text-bold text-white text-xl hover:bg-blue-900 cursor-pointer">
              <span>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              Dial 988 then Press 1
            </div>
            <div className="flex mt-6 flex-wrap">
              <div>
                <div className="md:w-40 w-48 mb-6 p-2 bg-btn flex justify-evenly rounded-full items-center text-bold text-white text-xl mr-6 cursor-pointer hover:bg-blue-900">
                  <span>
                    <FontAwesomeIcon icon={faMessage} />
                  </span>
                  Chat Online
                </div>
              </div>
              <div>
                <div className="md:w-36 w-40 p-2 bg-btn flex justify-evenly rounded-full items-center text-bold text-white text-xl cursor-pointer hover:bg-blue-900">
                  <span>
                    <FontAwesomeIcon icon={faMobile} />
                  </span>
                  Text Us
                </div>
              </div>
            </div>

            <div className="text-xl font-medium text-red-500 italic mt-8">
              Though no one can go back and make a brand new start, anyone can
              start from now and make a brand new ending.
            </div>
            <span className="text-xl font-semibold italic mt-3">
              ~Carl Bard
            </span>
          </div>
          <div className="flex justify-center m-6 lg:mt-24">
            <img
              src="https://source.unsplash.com/640x600/?addiction"
              alt=""
              className="rounded-3xl object-cover"
            />
            {/*  md:mt-8 lg:mt-24 mb-12 md:mr-12 md:ml-0 m-12 */}
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 h-72">
            {/* grid md:grid-cols-3 grid-cols-1 md:gap-3 gap-y-10 */}
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-3 gap-y-10 bg-bodyBG p-24">
              <div>
                <div className="flex flex-col justify-center items-center">
                  <img src={clock} className="w-16" alt="" />
                  <div className="text-3xl text-textColor mb-3 mt-3">
                    24/7 Support
                  </div>
                  <div className="text-gray-600 text-center">
                    Access free, confidential support 24/7, 365 days a year.
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col justify-center items-center">
                  <img src={live} className="w-16" alt="" />
                  <div className="text-3xl text-textColor mb-3 mt-3">
                    Live Connection
                  </div>
                  <div className="text-gray-600 text-center">
                    Connect with a real person qualified to support Veterans.
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col justify-center items-center">
                  <img src={frnd} className="w-16" alt="" />
                  <div className="text-3xl text-textColor mb-3 mt-3">
                    Our Services
                  </div>
                  <div className="text-gray-600 text-center">
                   <div>One-on-one support and guidance</div> 
                    <div>Access to resources and
                    support groups Private and secure chat platform</div> 
                  </div>
                </div>
              </div>
            </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FCFCFC" fillOpacity="1" d="M0,64L80,74.7C160,85,320,107,480,122.7C640,139,800,149,960,144C1120,139,1280,117,1360,106.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
          </div>
        </div>
      </div>

    </>
  );
};

export default MainSection;
