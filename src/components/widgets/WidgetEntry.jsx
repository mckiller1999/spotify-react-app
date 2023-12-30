import React from "react";
import "./WidgetEntry.scss";

const WidgetEntry = ({ title, subtitle, image }) => {
  return (
    <div className="widgetEntry flex">
      <img src={image} alt="" className="entryImg" />
      <div className="entryRightBody flex">
        <p className="entryTitle">{title}</p>
        <p className="entrySub">{subtitle}</p>
      </div>
    </div>
  );
};

export default WidgetEntry;
