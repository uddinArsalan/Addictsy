import React from "react";
import clock from "../logo/wall-clock.png";
import live from "../logo/live.png";
import frnd from "../logo/friends.png";
import { Link } from "react-router-dom";
// import Request from "../Request";

const MainSection = ({ menu }) => {
  return (
    <>
      {menu && (
        <div className="flex flex-col gap-2 p-8 rounded-lg shadow-2xl m-3 border-gray-500 justify-evenly">
          <div className="text-lg text-textColor font-semibold mb-3">
            How We Help
            <span>
              <i className="fa-solid fa-chevron-down text-dropDownArrow ml-2"></i>
            </span>
          </div>
          <div className="text-lg text-textColor font-semibold mb-3">
            Sign of Crisis
            <span>
            <i className="fa-solid fa-chevron-down text-dropDownArrow ml-2"></i>
            </span>
          </div>
          <div className="text-lg text-textColor font-semibold mb-3">
            Resources and Support
            <span>
            <i className="fa-solid fa-chevron-down text-dropDownArrow ml-2"></i>
            </span>
          </div>
          <div className="text-lg text-textColor font-semibold">
            About
            <span>
            <i className="fa-solid fa-chevron-down text-dropDownArrow ml-2"></i>
            </span>
          </div>
          <div className="flex flex-col gap-4">
          <div className="p-3 bg-menuBtn flex rounded-full items-center md:text-bold text-white text-base gap-4 w-fit md:text-xl hover:bg-blue-900 cursor-pointer flex-wrap">
            <span>
            <i className="fa-solid fa-mobile-screen-button text-sm"></i>
            </span>
            Dial 988 then Press 1
          </div>
          <Link to="login">
            <div className="p-2 w-24 bg-menuBtn flex justify-evenly rounded-full items-center md:text-bold text-white text-base md:text-xl cursor-pointer hover:bg-blue-900">
              <span>
              <i className="fa-regular fa-message text-sm"></i>
              </span>
              Chat
            </div>
          </Link>
          <div className="p-2 w-28 bg-menuBtn flex justify-evenly rounded-full items-center md:text-bold text-white md:text-xl text-base cursor-pointer hover:bg-blue-900">
            <span>
              <i className="fa-solid fa-mobile-screen-button text-sm"></i>
            </span>
            Text Us
          </div>
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
              <i className="fa-solid fa-mobile-screen-button"></i>
              </span>
              Dial 988 then Press 1
            </div>
            <div className="flex mt-6 flex-wrap">
              <Link to="login">
                <div>
                  <div className="md:w-40 w-48 mb-6 p-2 bg-btn flex justify-evenly rounded-full items-center text-bold text-white text-xl mr-6 cursor-pointer hover:bg-blue-900">
                    <span>
                    <i className="fa-regular fa-message"></i>
                    </span>
                    Chat Online
                  </div>
                </div>
              </Link>
              <div>
                <div className="md:w-36 w-40 p-2 bg-btn flex justify-evenly rounded-full items-center text-bold text-white text-xl cursor-pointer hover:bg-blue-900">
                  <span>
                  <i className="fa-solid fa-mobile-screen-button"></i>
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
              ~ Carl Bard
              {/* <Request name="Alice" email="alice@example.com" id={12081}/>
              <Request name="Bob" email="bob@example.com" id={8029}/> */}
            </span>
          </div>
          <div className="flex justify-center m-6 lg:mt-24">
            <img
              src="https://source.unsplash.com/640x600/?addiction"
              alt=""
              loading="lazy"
              className="rounded-3xl object-cover"
            />
            {/*  md:mt-8 lg:mt-24 mb-12 md:mr-12 md:ml-0 m-12 */}
          </div>
        </div>
        <div>
          
            {/* grid md:grid-cols-3 grid-cols-1 md:gap-3 gap-y-10 */}
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-3 gap-y-10 mt-16 bg-bodyBG lg:p-24 md:p-16 p-12">
              
                <div className="flex flex-col justify-center items-center gap-2">
                  <img src={clock} className="w-16" alt="" />
                  <div className="text-3xl text-textColor">24/7 Support</div>
                  <div className="text-gray-600 text-center">
                    Access free, confidential support 24/7, 365 days a year.
                  </div>
                </div>
             
                <div className="flex flex-col justify-center items-center gap-2">
                  <img src={live} className="w-16" alt="" />
                  <div className="text-3xl text-textColor">Live Connection</div>
                  <div className="text-gray-600 text-center">
                    Connect with a real person qualified to support Veterans.
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-2">
                  <img src={frnd} className="w-16" alt="" />
                  <div className="text-3xl text-textColor">Our Services</div>
                  <div className="text-gray-600 text-center"> 
                    One-on-one support and guidance
                      Access to resources and support groups Private and secure
                      chat platform
                    <div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;

