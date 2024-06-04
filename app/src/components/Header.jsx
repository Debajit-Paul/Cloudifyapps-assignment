import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineSpeakerWave } from "react-icons/hi2";

const Header = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audioElement = audioRef.current;

    const playAudio = () => {
      audioElement.play().catch(() => {
        document.addEventListener("click", handleUserInteraction, {
          once: true,
        });
      });
    };

    const handleUserInteraction = () => {
      audioElement.play();
    };

    playAudio();

    return () => {
      document.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    audioRef.current.muted = !isMuted;
  };

  return (
    <div className="w-screen p-5 fixed top-0 flex items-center justify-between z-20">
      <audio ref={audioRef} src="./audio-site.mp3" loop allow="autoplay" />
      <Link to={"/"}>
        <div className="flex items-center gap-[10px]">
          <div className="bg-white rounded-full w-[42px] h-[42px] flex items-center justify-center">
            <img src="./reallogo.png" alt="" className=" object-contain" />
          </div>

          <div className="flex flex-col ">
            <p className="text-white text-[14px]">Cloudifyapp Pvy. Ltd</p>
            <p className="text-white text-[10px]">By John Doe</p>
          </div>
        </div>
      </Link>
      <div
        className="flex items-center justify-center w-[40px] sm:w-[60px] h-[40px] sm:h-[60px] rounded-lg hover:bg-slate-100/15 cursor-pointer"
        onClick={toggleMute}
      >
        {isMuted ? (
          <img
            src="./mute.png"
            alt=""
            className="w-[25px] sm:w-[30px] h-[18px] sm:h-[24px]"
          />
        ) : (
          <HiOutlineSpeakerWave className="text-white w-[26px] sm:w-[30px] h-[26px] sm:h-[30px] font-[700]" />
        )}
      </div>
    </div>
  );
};

export default Header;
