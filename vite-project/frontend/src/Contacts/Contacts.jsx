import React,{forwardRef} from "react";

const Contacts = forwardRef(({img , name,isMe},ref) => {
  return (
    <>
    <div className={`grid md:grid-cols-2 grid-cols-1 place-items-center contacts-list cursor-pointer ${isMe == "me" ? "bg-gray-400 pointer-events-none" : ""}`} ref={ref}>
      <img src={img} className="rounded-full w-12 md:w-24 object-cover" alt="" />
      <div className="text-sm md:text-lg font-mono font-semibold text-center text-white">{name}    
      </div>
    </div>
      <div className="bg-white h-1"></div>
    </>
 )
});

export default Contacts;
