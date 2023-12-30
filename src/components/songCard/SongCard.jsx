import React from "react";
import "./SongCard.scss";
import AlbumImg from "./album/AlbumImg";
import AlbumInfo from "./album/AlbumInfo";

const SongCard = ({ album }) => {
  //console.log(album);
  return (
    <div className="songCardBody ">
      <div className="containerSongCard flex">
        <AlbumImg url={album?.images[0]?.url} />
        <AlbumInfo album={album} />
      </div>
    </div>
  );
};

export default SongCard;
