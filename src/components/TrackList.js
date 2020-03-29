import React, { useContext } from "react";
import { TrackContext } from "../contexts/TrackContext";
import Track from "./Track";

const TrackList = () => {
  const [state, dispatch] = useContext(TrackContext);
  const { tracks, heading } = state;

  if (tracks.length) {
    return (
      <div>
        <h3 className="text-center mb-4">{heading}</h3>
        <div className="row">
          {tracks.map(item => (
            <Track key={item.track.track_id} track={item.track} />
          ))}
        </div>
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default TrackList;
