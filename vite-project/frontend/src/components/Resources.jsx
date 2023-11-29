import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Resources = () => {
  // function Translate(e) {
  //     // console.log()
  //     e.target.children[2].classList.add("translate-x-1")
  // }
  // onMouseOver={(e) => Translate(e)}

  return (
    <div id="signofcrisis" className="flex flex-col items-center gap-8 mt-0">
        <div className="text-textColor text-3xl">Resources</div>
      <div className="grid md:grid-cols-3 grid-cols-1 place-items-center gap-12 md:w-3/4 m-auto">
        <div className="flex flex-col gap-2 w-64 p-8 shadow-lg hover:shadow-xl rounded-3xl justify-center cursor-pointer">
          <div className="text-textColor font-semibold text-2xl">
            Signs of Crisis
          </div>
          <div className="text-gray-600">
            Some behaviours can be a sign that at person need help. Learn to
            spot the warning signs of an emotional or mental health crisis
          </div>
          <div className="flex justify-between items-center w-3/4">
            <div className="text-teal-600 hover:underline">Read More</div>
            <i className="fa-solid fa-arrow-right text-textColor"></i>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-64 p-8 shadow-lg hover:shadow-xl rounded-3xl justify-center cursor-pointer">
          <div className="text-textColor font-semibold text-2xl mb-2">
            Local Resources
          </div>
          <div className="text-gray-600">
            No matter what you're experiencing, we have resources and support
            systems to help get your life back on track.
          </div>
          <div className="flex justify-between items-center w-3/4">
            <div className="text-teal-600 hover:underline">Read More</div>
            <i className="fa-solid fa-arrow-right text-textColor"></i>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-64 p-8 shadow-lg hover:shadow-xl rounded-3xl justify-center cursor-pointer">
          <div className="text-textColor font-semibold text-2xl mb-2">
            Articles
          </div>
          <div className="text-gray-600">
            Some behaviours can be a sign that at person need help. Learn to
            spot the warning signs of an emotional or mental health crisis
          </div>
          <div className="flex justify-between items-center w-3/4">
            <div className="text-teal-600 hover:underline">Read More</div>
            <i className="fa-solid fa-arrow-right text-textColor"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
