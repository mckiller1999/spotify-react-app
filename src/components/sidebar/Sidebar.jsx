import "./Sidebar.scss";
import SidebarBtn from "./SidebarBtn";
import { MdFavorite, MdSpaceDashboard } from "react-icons/md";
import { FaGripfire, FaPlay, FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { useEffect, useState } from "react";
import apiClient, { logout } from "../../spotify";
import SidebarBtnLO from "./SidebarBtnLO";

const Sidebar = () => {
  const [name, setName] = useState("user");
  const [img, setImg] = useState("https://i.pravatar.cc?u=1");
  useEffect(() => {
    apiClient.get("me").then((response) => {
      //console.log(response);
      setImg(response.data.images[0].url);
      setName(response.data.display_name);
    });
  }, []);
  return (
    <div className="sidebar">
      <div className="profileImg">
        <img src={img} alt="" />
        <p>{name} </p>
      </div>

      <div>
        <SidebarBtn title="Feet" to="/feet" icon={<MdSpaceDashboard />} />
        <SidebarBtn title="Trending" to="/trending" icon={<FaGripfire />} />
        <SidebarBtn title="Player" to="/player" icon={<FaPlay />} />
        <SidebarBtn title="Favorites" to="/favorites" icon={<MdFavorite />} />
        <SidebarBtn title="Libary" to="/" icon={<IoLibrary />} />
      </div>
      <SidebarBtnLO title="Sign Out" logout={logout} icon={<FaSignOutAlt />} />
    </div>
  );
};

export default Sidebar;
