import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Success = () => {
  return (
    <>
      <img
        src="./bg.webp"
        alt=""
        className="brightness-[40%] w-[100%] h-screen object-cover zoom-in-out-box relative z-0"
      />
      <motion.div
        initial={{ x: "100%", y: "50%" }}
        animate={{ x: ["100%", "-70%", "-50%"], y: "50%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="absolute z-10 top-[5%] left-[50%] text-white text-[20px] font-int [transform:translate(-50%,50%)] flex flex-col items-center"
      >
        <img
          src="./success_logo.png"
          alt=""
          className="w-[150px] sm:w-[230px] md:w-[250px] h-[150px] sm:h-[230px] md:h-[250px]"
        />

        <p className="text-[20px] sm:text-[25px] md:text-[30px] font-[500] mt-[20px] text-center">
          Hope you learned something new!
        </p>

        <Link to={"/"}>
          <div className="flex items-center justify-center gap-2 p-[0.8rem] sm:p-4 mt-[30px] w-[180px] hover:w-[190px] hover:gap-4 rounded-[3rem] bg-[#FDF416] group cursor-pointer">
            <img
              src="./try.png"
              alt=""
              className="w-6 h-6 group-hover:scale-125 group-hover:rotate-360 duration-500 ease-in"
            />
            <p className="font-[700] text-[15px] sm:text-[20px] text-black">
              Play again
            </p>
          </div>
        </Link>
      </motion.div>
    </>
  );
};

export default Success;
