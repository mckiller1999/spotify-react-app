import React from "react";
import "./AlbumInfo.scss";

const AlbumInfo = ({ album }) => {
  //console.log(album);
  const artists = [];
  album?.artists?.forEach((element) => {
    artists.push(element.name);
  });
  return (
    <div className="albumInfoMain">
      <div className="albumNameContainer">
        <div className="marquee">
          <p>{album?.name + " - " + artists?.join(" , ")} </p>
        </div>
      </div>
      <div className="albumInfo">
        <p>
          {`${album?.name} is an ${album?.album_type} by ${artists?.join(
            " , "
          )} with ${album?.total_tracks} track(s)`}
        </p>
      </div>
      <div className="albumRelease">
        <p>Release Date: {album?.release_date}</p>
      </div>
    </div>
  );
};

export default AlbumInfo;
