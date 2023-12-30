import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Libary from "../libary/Libary";
import Feet from "../feet/Feet";
import Player from "../player/Player";
import Tranding from "../trending/Tranding";
import Favorites from "../favorites/Favorites";
import "./Home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Login from "../auth/Login";
import { setClientToken } from "../../spotify";

const Home = () => {
  const [token, setToken] = useState("");
  //set tokken to localeStoge
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);

  return !token ? (
    <Login />
  ) : (
    <Router>
      <div className="mainBody">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Libary />} />
          <Route path="/feet" element={<Feet />} />
          <Route path="/trending" element={<Tranding />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Home;
