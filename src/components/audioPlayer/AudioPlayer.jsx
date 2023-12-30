import React, { useState, useRef, useEffect } from "react";
import "./AudioPlayer.scss";
import Controls from "./wave-animation/Controls";
import ProgressCircle from "./ProgressCircle";
import WaveAnimation from "./wave-animation/WaveAnimation";

const AudioPlayer = ({
  currentTracks,
  setCurrentIndex,
  currentIndex,
  total,
  isPlayingMs,
  setIsPlayingMs,
}) => {
  //console.log(total[currentIndex]);
  const [isPlaying, setIsPlaying] = useState(false);

  const [trackProgress, setTrackProgress] = useState(0);
  var audioSrc = total[currentIndex]?.track.preview_url;

  const audioRef = useRef(new Audio(total[0]?.track.preview_url));
  // //console.log(audioRef);

  const intervalRef = useRef();

  const isReady = useRef(false);

  const { duration } = audioRef.current;

  const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        handleNext();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  // //
  useEffect(() => {
    //console.log(isPlayingMs);
    if (audioRef.current.src) {
      if (isPlayingMs) {
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    } else {
      if (isPlayingMs) {
        audioRef.current = new Audio(audioSrc);
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    }
  }, [isPlayingMs]);

  useEffect(() => {
    //console.log(isPlaying);
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);

    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);

      startTimer();
    } else {
      isReady.current = true;
    }
  }, [currentIndex]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleNext = () => {
    if (currentIndex < total.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsPlayingMs(true);
    } else {
      setIsPlayingMs(true);

      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 1 < 0) setCurrentIndex(total.length - 1);
    else setCurrentIndex(currentIndex - 1);
    setIsPlayingMs(true);
  };

  // //

  // //
  const addZero = (n) => {
    return n > 9 ? "" + n : "0" + n;
  };
  const artists = [];
  currentTracks?.album?.artists.forEach((artist) => {
    artists.push(artist.name);
  });
  return (
    <div className="audioPlayerMain flex">
      <div className="playerLeftBody">
        <ProgressCircle
          percentage={currentPercentage}
          isPlaying={isPlaying}
          image={currentTracks?.album?.images[0]?.url}
          size={300}
          color={"#3e61d2"}
        />
      </div>
      <div className="playerRightBody flex">
        <p className="songTitle">{currentTracks?.name}</p>
        <p className="songArtis">{artists.join("  ")}</p>
        <div className="playerRightBt flex">
          <div className="songDuration flex">
            <p className="duration">0:{addZero(Math.round(trackProgress))}</p>
            <WaveAnimation isPlayingMs={isPlayingMs} />
            <p className="duration">0:30</p>
          </div>
          <Controls
            isPlayingMs={isPlayingMs}
            setIsPlayingMs={setIsPlayingMs}
            handleNext={handleNext}
            handlePrev={handlePrev}
            total={total}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
