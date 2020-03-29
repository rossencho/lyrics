import React, { useState, useEffect, useContext } from "react";
import { TrackContext } from "../contexts/TrackContext";
import axios from "axios";
import { MUSICBOX_GET_TRACKS_URL } from "../config/defines";

const Search = () => {
  const [state, dispatch] = useContext(TrackContext);
  const [userInput, setUserInput] = useState("");
  const [trackTitle, setTrackTitle] = useState("");

  useEffect(() => {
    axios
      .get(MUSICBOX_GET_TRACKS_URL.replace(/\{\%\w+\%\}/, trackTitle))
      .then(res => {
        const track_list = res.data.message.body.track_list;
        dispatch({
          type: "GET_TRACKS",
          payload: { tracks: track_list, heading: "Found results" }
        });
      })
      .catch(err => console.log(err));
  }, [trackTitle]);

  const onChange = e => {
    setUserInput(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setTrackTitle(userInput);
  };

  return (
    <div className="card card-body mb-4 p-4">
      <h1 className="display-4 text-center">
        <i className="fas fa-music" /> Search For A Song
      </h1>
      <p className="lead text-center">Get the lyrics for any song</p>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Song title..."
            name="userInput"
            value={userInput}
            onChange={onChange}
          />
        </div>
        <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">
          Get Track Lyrics
        </button>
      </form>
    </div>
  );
};

export default Search;
