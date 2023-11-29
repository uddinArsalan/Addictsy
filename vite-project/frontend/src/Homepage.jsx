import React, { useState } from "react"
import Navbar from "./components/Navbar"
import MainSection from "./components/MainSection"
import Work from "./components/HowItWorks"
import Resources from "./components/Resources"
import Footer from "./components/Footer"

export default function Homepage() {

  const [menu,setMenu] = useState(false);

  return (
    <>
    <Navbar menu={menu} setMenu={setMenu}/>
    <MainSection menu={menu}/>
    <Work />
    <Resources/>
    <Footer />
    </>
  )
}
