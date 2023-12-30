import React from "react";
import "./SidebarBtn.scss";
import { Link, useLocation } from "react-router-dom";
import { IconContext } from "react-icons";

const SidebarBtnLO = (props) => {
  const { logout } = props;
  //console.log(logout);
  const location = useLocation();
  const isActive = location.pathname === props.to;
  const btnClass = isActive ? "btnBody active" : "btnBody";
  return (
    <Link to={props.to} onClick={logout}>
      <div className={btnClass}>
        <IconContext.Provider value={{ size: "24px", className: "btnIcon" }}>
          {props.icon}
          <p className="btnTile">{props.title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  );
};

export default SidebarBtnLO;
