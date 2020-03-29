import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MUSICBOX_GET_LYRICS_URL,
  MUSICBOX_GET_TRACK_URL
} from "../config/defines";
import { Link } from "react-router-dom";

const Lyrics = props => {
  const [track, setTrack] = useState({});
  const [lyrics, setLyrics] = useState({});
  const { id } = props.match.params;

  useEffect(() => {
    axios
      .get(MUSICBOX_GET_LYRICS_URL.replace(/\{\%\w+\%\}/, id))
      .then(res => {
        setLyrics(res.data.message.body.lyrics);
      })
      .catch(err => console.log(err.message));

    axios
      .get(MUSICBOX_GET_TRACK_URL.replace(/\{\%\w+\%\}/, id))
      .then(res => {
        setTrack(res.data.message.body.track);
      })
      .catch(err => console.log(err.message));
  }, [id]);

  if (lyrics === undefined || Object.keys(lyrics).length === 0) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <Link to="/" className="btn btn-dark btn-sm mb-4">
          Go Back
        </Link>
        <div className="card">
          <h5 className="card-header">
            {track.track_name} by{" "}
            <span className="text-secondary">{track.artist_name}</span>
          </h5>
          <div className="card-body">
            <p className="card-text">{lyrics.lyrics_body}</p>
          </div>
        </div>
        <ul className="list-group mt-3">
          <li className="list-group-item">
            <strong>Album ID</strong>: {track.album_id}
          </li>
          <li className="list-group-item">
            <strong>Song Genre</strong>:{" "}
            {track.primary_genres !== undefined &&
            track.primary_genres.music_genre_list.length
              ? track.primary_genres.music_genre_list[0].music_genre
                  .music_genre_name
              : "NO GENRE AVAILABLE"}
          </li>
          <li className="list-group-item">
            <strong>Explicit Words</strong>:{" "}
            {track.explicit === 0 ? "No" : "Yes"}
          </li>
          <li className="list-group-item">
            <strong>Release Date</strong>: {track.first_release_date}
          </li>
        </ul>
      </div>
    );
  }
};

export default Lyrics;
