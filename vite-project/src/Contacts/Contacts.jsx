import React,{forwardRef} from "react";

const Contacts = forwardRef(({img , name},ref) => {
  return (
    <>
    <div className="grid md:grid-cols-2 grid-cols-1 place-items-center m-4 contacts-list cursor-pointer" ref={ref}>
      <img src={img} className="rounded-full w-24 object-cover" alt="" />
      <div className="text-lg font-mono font-semibold text-center text-white">{name}    
      </div>
    </div>
      <div className="bg-white h-1"></div>
    </>
 )
});

export default Contacts;
