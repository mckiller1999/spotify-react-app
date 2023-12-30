import React from "react";
import "./Queue.scss";

const Queue = ({ tracks, setCurrentIndex, isPlayingMs, setIsPlayingMs }) => {
  //console.log(tracks);
  return (
    <div className="queueMain flex">
      <div className="queueContainer flex">
        <p className="upNext">Up next</p>
        <div className="queueList">
          {tracks?.map((track, index) => (
            <div
              key={index + "key"}
              className="queueItem flex"
              onClick={() => {
                setCurrentIndex(index);
                setIsPlayingMs(true);
              }}
            >
              <p className="trackName">{track?.track?.name}</p>
              <p>0:30</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Queue;
