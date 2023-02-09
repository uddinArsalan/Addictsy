import React from "react";

const Contacts = ({img , name}) => {
  return (
    <>
    <div className="grid md:grid-cols-2 grid-cols-1 place-items-center m-4 contacts-list cursor-pointer">
      <img src={img} className="rounded-full bg-white w-28" alt="" />
      <div className="text-lg font-mono font-semibold text-center text-white">{name}    
      </div>
    </div>
      <div className="bg-white h-1"></div>
    </>
 )
};

export default Contacts;
