import React from "react";
import { useParams } from "react-router-dom";

const SIngleTrack = () => {
  const { id } = useParams();
  return (
    <div className="flex items-center h-screen justify-center md:mx-44 mx-5">
      <iframe
        src={`https://open.spotify.com/embed/track/${id}?utm_source=generator`}
        width="100%"
        height="352"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Loading..."
      ></iframe>
    </div>
  );
};

export default SIngleTrack;
