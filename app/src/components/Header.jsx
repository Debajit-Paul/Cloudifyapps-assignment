import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineSpeakerWave } from "react-icons/hi2";

const Header = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // Play the music on component mount
    audioRef.current.play();
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    audioRef.current.muted = !isMuted;
  };

  return (
    <div className="w-screen p-5 fixed top-0 flex items-center justify-between z-20">
      <audio ref={audioRef} src="./audio-site.mp3" loop allow="autoplay" />
      <Link to={"/"}>
        <img src="./logo.png" alt="" className="w-[150px] sm:w-[190px]" />
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
