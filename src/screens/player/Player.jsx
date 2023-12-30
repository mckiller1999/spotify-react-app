import React, { useEffect, useState } from "react";
import "./Player.scss";
import { useLocation } from "react-router-dom";
import apiClient from "../../spotify";
import SongCard from "../../components/songCard/SongCard";
import Queue from "../../components/queue/Queue";
import AudioPlayer from "../../components/audioPlayer/AudioPlayer";
import Widgets from "../../components/widgets/Widgets";

const Player = () => {
  //

  //
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTracks, setCurrentTracks] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlayingMs, setIsPlayingMs] = useState(false);

  //console.log(location);
  useEffect(() => {
    if (location.state) {
      //

      //
      apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          //console.log(res.data.items[0].track);
          setTracks(res.data.items);
          setCurrentTracks(res.data.items[0].track);
          //console.log(res.data.items[0].track.album);
        });
    }
  }, [location.state]);
  //

  //

  useEffect(() => {
    setCurrentTracks(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);
  return (
    <div className="screenContainer flex ">
      <div className="leftPlayerBody">
        <AudioPlayer
          currentTracks={currentTracks}
          total={tracks}
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
          isPlayingMs={isPlayingMs}
          setIsPlayingMs={setIsPlayingMs}
        />
        <Widgets artistID={currentTracks?.album} />
      </div>
      <div className="rightPlayerBody flex">
        <SongCard album={currentTracks?.album} />
        <Queue
          tracks={tracks}
          setCurrentIndex={setCurrentIndex}
          isPlayingMs={isPlayingMs}
          setIsPlayingMs={setIsPlayingMs}
        />
      </div>
    </div>
  );
};

export default Player;
