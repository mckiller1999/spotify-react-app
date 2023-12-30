import React, { useEffect, useState } from "react";
import APIKit from "../../spotify";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import "./Libary.scss";
import { useNavigate } from "react-router-dom";

const Libary = ({}) => {
  const [playLists, setPlayList] = useState(null);

  const navigate = useNavigate();
  const playPlayList = (id) => {
    navigate("/player", { state: { id: id } });
  };
  useEffect(() => {
    APIKit.get("me/playlists").then(function (response) {
      //console.log(response.data.items);
      setPlayList(response.data.items);
    });
  }, []);

  return (
    <div className="screenContainer">
      <div className="libaryBody">
        {playLists?.map((playlist) => (
          <div
            className="playlistCard"
            key={playlist.id}
            onClick={() => playPlayList(playlist.id)}
          >
            <img src={playlist.images[0].url} className="playlistImg" alt="" />
            <p className="playlistTitle">{playlist.name}</p>
            <p className="playlistSubtitle">{playlist.tracks.total} Song</p>
            <div className="playlistFade">
              <IconContext.Provider value={{ size: "50px", color: "#3e61d2" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Libary;
