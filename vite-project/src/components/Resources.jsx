import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong
} from "@fortawesome/free-solid-svg-icons";

const Resources = () => {

    // function Translate(e) {
    //     // console.log()
    //     e.target.children[2].classList.add("translate-x-1")
    // }
    // onMouseOver={(e) => Translate(e)}

    return(
        <div id="signofcrisis">
        <div className="grid md:grid-cols-3 grid-cols-1 pt-0 place-items-center gap-y-16 pb-0 md:gap-y-0">
            <div className="flex flex-col items-center w-64 p-8 shadow-lg hover:shadow-2xl rounded-3xl relative justify-center cursor-pointer">
                <div className="text-textColor font-semibold text-2xl mb-2">Signs of Crisis</div>
                <div className="text-gray-600">Some behaviours can be a sign that at person need help. Learn to spot the warning signs of an emotional or mental health crisis</div>
                <div><FontAwesomeIcon icon={faArrowRightLong} className="absolute top-52 right-8 text-textColor"/></div>
            </div>
            <div className="flex flex-col items-center w-64 h-64 p-8 shadow-lg hover:shadow-2xl rounded-3xl relative justify-center cursor-pointer">
                <div className="text-textColor font-semibold text-2xl mb-2">Local Resources</div>
                <div className="text-gray-600">No matter what you're experiencing, we have resources and support systems to help get your life back on track.</div>
                <div><FontAwesomeIcon icon={faArrowRightLong} className="absolute top-52 right-8 text-textColor"/></div>
            </div>
            <div className="flex flex-col items-center w-64 p-8 shadow-lg hover:shadow-2xl rounded-3xl relative justify-center cursor-pointer">
                <div className="text-textColor font-semibold text-2xl mb-2">Articles</div>
                <div className="text-gray-600">Some behaviours can be a sign that at person need help. Learn to spot the warning signs of an emotional or mental health crisis</div>
                <div><FontAwesomeIcon icon={faArrowRightLong} className="absolute top-52 right-8 text-textColor"/></div>
            </div>
        </div>
        </div>
    )
}

export default Resources