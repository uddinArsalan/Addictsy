import React, { useState } from "react";
import logo from "../logo/png/logo-no-background.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faPhone,
  faMessage,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"

const Navbar = ({ menu, setMenu }) => {

  return (
    <div className="p-10 pt-0 pr-0 bg-bodyBG flex justify-between items-center lg:z-10 lg:fixed top-0 right-0 left-0">
      <Link to="/"><img src={logo} alt="" className="w-44 mt-8 bg-btn rounded-lg " /></Link>
      <div className="p-4 h-10 text-center font-semibold bg-btn text-white flex justify-center items-center lg:hidden rounded-3xl mt-8 mr-4 cursor-pointer" onClick={() => setMenu(prev => !prev)}>
        Menu
        <span className="ml-2">
          <FontAwesomeIcon icon={menu ? faXmark : faBars}/>
        </span>
      </div>
      <div className="lg:flex hidden flex-col justify-between">
        <div className="flex mt-8">
        <div className="bg-btn p-3 font-bold text-white w-44 rounded-full flex justify-evenly items-center mr-6">
            <span>
              <FontAwesomeIcon icon={faPhone} />
            </span>
            Call Now
          </div>
          <Link to="login"><div className="bg-btn p-3 font-bold text-white w-44 rounded-full flex justify-evenly items-center">
            <span>
              <FontAwesomeIcon icon={faMessage} inverse />
            </span>
            Chat Now
          </div></Link>
        </div>
        <div className="flex align-bottom mr-16 mt-8 pb-0 mb-0">
        <a href="#howitworks" ><div className="flex mr-5">
            <div className="font-semibold text-md text-textColor mr-2">
              How We Help
            </div>
            <span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="cursor-pointer text-dropDownArrow"
              />
            </span>
          </div>
          </a>
          <a href="#signofcrisis"><div className="flex mr-5">
            <div className="font-semibold text-md text-textColor cursor-pointer">
              Signs of Crisis
            </div>
          </div>
          </a>
          <div className="flex mr-5">
            <div className="font-semibold text-md text-textColor mr-2">
              Resources and Support
            </div>
            <span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="cursor-pointer text-dropDownArrow"
              />
            </span>
          </div>
          <div className="flex">
            <div className="font-semibold text-md text-textColor mr-2">
              About
            </div>
            <span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="cursor-pointer text-dropDownArrow"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
