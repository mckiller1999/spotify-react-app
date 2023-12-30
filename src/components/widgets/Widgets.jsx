import React, { useEffect, useState } from "react";
import "./Widgets.scss";
import apiClient from "../../spotify";
import WidgetCard from "./WidgetCard";

const Widgets = ({ artistID }) => {
  const [similar, setSimilar] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [newRelease, setNewRelease] = useState([]);
  const id = artistID?.artists[0]?.id;
  useEffect(() => {
    //console.log(similar, featured, newRelease);
    apiClient
      .get(`/artists/${id}/related-artists`)
      .then((res) => {
        const a = res.data?.artists.slice(0, 3);
        setSimilar(a);
      })
      .catch((err) => console.log(err));

    apiClient
      .get(`/browse/featured-playlists`)
      .then((res) => {
        const a = res.data?.playlists.items.slice(0, 3);
        setFeatured(a);
      })
      .catch((err) => console.log(err));

    apiClient
      .get(`/browse/new-releases`)
      .then((res) => {
        const a = res.data?.albums.items.slice(0, 3);
        setNewRelease(a);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div className="widgets flex">
      <WidgetCard title="Similar Artists" similar={similar} />
      <WidgetCard title="Made For You" featured={featured} />
      <WidgetCard title="New Releases" newRelease={newRelease} />
    </div>
  );
};

export default Widgets;
