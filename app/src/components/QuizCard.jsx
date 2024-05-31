import React, { useState } from "react";
import { Tilt } from "react-tilt";

const QuizCard = ({ question, answer, image }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 25, // max tilt rotation (degrees)
    perspective: 1100, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 500, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    // container
    <Tilt
      options={defaultOptions}
      className="w-[90%] sm:w-[65%] md:w-[52%] md:max-w-[820.8px] h-[45%] sm:h-[60vh] md:h-[57%] md:max-h-[820.8px]"
    >
      {/* card */}
      <div
        className={`relative top-0 left-0 w-[100%] h-[100%] rounded-3xl [transform-style:preserve-3d] transition-all ease-in-out duration-700 cursor-pointer ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
        onClick={() => {
          setIsFlipped(!isFlipped);
          console.log(isFlipped);
        }}
      >
        {/* Front */}
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-white  rounded-3xl font-cop flex flex-col items-center justify-evenly md:justify-center p-[18px] sm:px-[48px] sm:py-[60px] [backface-visibility:hidden]">
          <p className="text-[24px] sm:text-[37px] md:text-[47px] leading-[34px] sm:leading-[44px] md:leading-[65px] font-medium text-center">
            {question}
          </p>
          <div className="flex items-center justify-center gap-[0.75rem] md:gap-5 font-int font-[600] absolute left-[50%] bottom-[10%] [transform:translate(-50%,0%)] w-[80%]">
            <img src="./tap.png" alt="" className="w-5 h-5 " />
            <p>Tap to reveal the answer</p>
          </div>
        </div>
        {/* Back */}
        <div className="absolute top-0 left-0 w-[100%] h-[100%] rounded-3xl font-cop [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white flex flex-col items-center">
          <img
            src={`${image}`}
            alt=""
            className="w-[100%] h-[70%] md:h-[80%] rounded-t-3xl object-fill px-2 pt-2"
          />
          <p className="text-[14px] sm:text-[20px] md:text-[26px] leading-[28px] sm:leading-[42px] font-medium text-center p-[24px] w-[95%] ">
            {answer}
          </p>
        </div>
      </div>
    </Tilt>
  );
};

export default QuizCard;
