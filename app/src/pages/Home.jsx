import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <img
        src="./bg.webp"
        alt=""
        className="brightness-[40%] w-[100%] h-screen object-cover zoom-in-out-box relative z-0"
      />
      <motion.div
        initial={{ x: "-50%", y: "50%", opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
        exit={{ x: ["0%", "-100%"] }}
        className="absolute z-10 top-[20%] left-[50%] text-white text-[20px] font-int [transform:translate(-50%,50%)] flex flex-col items-center"
      >
        <p className="font-[700] text-[28px] sm:text-[50px] w-[420px] sm:w-[630px] text-center leading-[52px] sm:leading-[70px]">
          Addition and Subtraction Facts within 20
        </p>

        <div className="flex flex-col items-center mt-[20px] text-center">
          <p className="text-[12px] sm:text-[20px]">
            Test your knowledge with the following questions, tap a card to{" "}
          </p>
          <p className="text-[12px] sm:text-[20px]">
            flip it and uncover the answer, good luck!
          </p>
        </div>

        <Link to={"/quiz"}>
          <div className="flex items-center justify-center gap-2 p-[0.8rem] sm:p-4 mt-[30px] w-[150px] sm:w-[170px] hover:w-[190px] hover:gap-4 rounded-[3rem] bg-[#FDF416] group cursor-pointer">
            <img
              src="./play.png"
              alt=""
              className="w-6 h-6 group-hover:scale-125 rotate-0 group-hover:rotate-360 duration-500 ease-in-out"
            />
            <p className="font-[700] text-[15px] sm:text-[20px] text-black">
              Let's play
            </p>
          </div>
        </Link>
      </motion.div>
    </>
  );
};

export default Home;
