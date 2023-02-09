import React from "react";
import { Link } from "react-router-dom";
// import React, { useState } from "react";
import logo from "../logo/png/logo-no-background.png";

const Nav = () => {
    return(
        <div className="p-10 bg-bodyBG flex justify-start items-center">
      <Link to="/"><img src={logo} alt="" className="w-64 bg-btn rounded-lg " /></Link>
      </div>
    )
}

export default Nav