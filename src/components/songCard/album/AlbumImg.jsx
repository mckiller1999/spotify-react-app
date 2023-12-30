import React from "react";
import "./AlbumImg.scss";

const AlbumImg = ({ url }) => {
  //console.log(url);
  return (
    <div className="albumImg flex">
      <img src={url} alt="album" className="albumImgArt" />
      <div className="albumImgShadow">
        <img src={url} alt="album" className="albumImgShadow" />
      </div>
    </div>
  );
};

export default AlbumImg;
