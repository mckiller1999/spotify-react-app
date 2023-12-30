import React from "react";
import "./Controls.scss";
import { IconContext } from "react-icons";
import { FaPause } from "react-icons/fa";
import { IoPlaySkipForward, IoPlaySkipBack, IoPlay } from "react-icons/io5";

const Controls = ({ isPlayingMs, setIsPlayingMs, handleNext, handlePrev }) => {
  return (
    <IconContext.Provider value={{ size: "35px", color: "#C4D0E3" }}>
      <div className="controlsMain flex">
        <div className="actionBtn" onClick={handlePrev}>
          <IoPlaySkipBack />
        </div>
        <div
          className={
            isPlayingMs ? "play-pause-btn flex active" : "play-pause-btn flex"
          }
          onClick={() => setIsPlayingMs(!isPlayingMs)}
        >
          {isPlayingMs ? <FaPause /> : <IoPlay />}
        </div>
        <div className="actionBtn" onClick={handleNext}>
          <IoPlaySkipForward />
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Controls;
