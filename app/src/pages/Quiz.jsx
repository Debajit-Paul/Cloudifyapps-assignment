import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import QuizCard from "../components/QuizCard";
import data from "../data.json";
import { resetAlert } from "../features/alert/alertSlice";

const Quiz = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const dispatch = useDispatch();

  return (
    <>
      <img
        src="./bg.webp"
        alt=""
        className="brightness-[40%] w-[100%] h-screen object-cover relative z-0"
      />
      <motion.div
        initial={{ x: "0%", opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
        exit={{ x: ["0%", "-100%"] }}
        className="absolute w-[100%] h-[100%] top-0 left-[0%] z-10"
      >
        <Swiper
          style={{
            "--swiper-navigation-color": "#000",
            "--swiper-pagination-color": "#000",
          }}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          freeMode={true}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            type: "bullets",
          }}
          onSlideChangeTransitionEnd={(e) => {
            setCurrentSlide(e.activeIndex);
          }}
          modules={[FreeMode, Navigation, Pagination]}
          className=" absolute w-[100%] h-[100%] top-[0%] left-[50%] [transform:translate(-50%,0%)] z-10"
        >
          {data.map((card) => (
            <SwiperSlide
              key={card.id}
              className="flex items-center justify-center"
            >
              <QuizCard
                question={card.question}
                answer={card.answer}
                image={card.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <motion.div
          initial={{ opacity: 1 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute top-[88%] sm:top-[50%] left-[5%] md:left-[16%] swiper-button-prev w-[48px] sm:w-[60px] h-[48px] sm:h-[60px] bg-[#FDF416] bg-cover rounded-full group hover:scale-110 duration-500 ease-in-out flex items-center justify-center z-10
          "
            onClick={() => dispatch(resetAlert(false))}
          >
            <img
              src={
                currentSlide === 0 ? `./white_arrow.png` : `./black_arrow.png`
              }
              alt=""
              className="w-[0.85rem] h-[1.1rem] rotate-180 group-hover:scale-90 duration-500 ease-in-out mr-[2px] sm:mr-[5px]"
              onClick={() => dispatch(resetAlert(false))}
            />
          </div>
          <div
            className={`absolute top-[88%] sm:top-[50%] right-[5%] md:right-[16%] swiper-button-next w-[48px] sm:w-[60px] h-[48px] sm:h-[60px] bg-[#FDF416] bg-cover rounded-full group hover:scale-110 duration-500 ease-in-out flex items-center justify-center z-10`}
            onClick={() => {
              dispatch(resetAlert(false));
              if (currentSlide + 1 === data.length) {
                navigate("/success");
              }
            }}
          >
            <img
              src="./black_arrow.png"
              alt=""
              className="w-[0.85rem] h-[1.1rem] group-hover:scale-90 duration-500 ease-in-out"
              onClick={() => dispatch(resetAlert(false))}
            />
          </div>
          <div
            className={`flex items-center absolute top-[14%] sm:top-[10%] md:top-[14%] left-[50%] [transform:translate(-50%,0%)] ${
              currentSlide === 9 ? `gap-4` : `gap-2`
            } ease-in-out duration-500 z-10`}
          >
            <p className={`text-white text-[17px] font-cop  tracking-[3px]`}>
              <span className="font-[600]">{currentSlide + 1}</span>
              {`/${data.length}`}
            </p>
            <div className="swiper-pagination"></div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Quiz;
