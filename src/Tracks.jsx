import React from "react";
import { Link } from "react-router-dom";

const Tracks = ({ track }) => {
  const time = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };
  return (
    <div className="rounded-xl card">
      <div className="relative">
        <img
          src={track.data.albumOfTrack.coverArt.sources[0].url}
          alt=""
          className="rounded-t-xl"
        />
        <Link to={`/track/${track.data.id}`} id={track.data.id}>
          <span className="absolute bottom-2 right-2 play-btn px-5 text-center py-4 rounded-full">
            <i class="fa-solid fa-play fa-2x"></i>
          </span>
        </Link>
      </div>
      <div className="py-4 pl-5 space-y-3">
        <p>{track.data.name}</p>
        <p>{time(track.data.duration.totalMilliseconds)} mins</p>
      </div>
    </div>
  );
};

export default Tracks;
