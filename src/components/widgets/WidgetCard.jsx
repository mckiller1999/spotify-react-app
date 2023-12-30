import React from "react";
import "./WidgetCard.scss";
import WidgetEntry from "./WidgetEntry";
import { IconContext } from "react-icons";
import { FiChevronRight } from "react-icons/fi";

const WidgetCard = ({ title, similar, featured, newRelease }) => {
  return (
    <div className="widgetCard">
      <p className="widgetTitle">{title}</p>
      {similar
        ? similar.map((artist) => (
            <WidgetEntry
              title={artist?.name}
              subtitle={artist?.followers?.total + " Followers"}
              image={artist?.images[2]?.url}
            />
          ))
        : featured
        ? featured.map((playlist) => (
            <WidgetEntry
              title={playlist?.name}
              subtitle={playlist?.tracks?.total + " Songs"}
              image={playlist?.images[0]?.url}
            />
          ))
        : newRelease
        ? newRelease.map((album) => (
            <WidgetEntry
              title={album?.name}
              subtitle={album?.artists[0]?.name}
              image={album?.images[2]?.url}
            />
          ))
        : null}
      <div className="widgetFade">
        <div className="fadeBtn">
          <IconContext.Provider value={{ size: "24px", color: "#c4d0e3" }}>
            <FiChevronRight />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default WidgetCard;
