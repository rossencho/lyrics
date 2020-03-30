import React, { useState, useEffect, useContext } from "react";
import { getLyrics, getTrackInfo } from "../services/tracks";
import { Link } from "react-router-dom";
import { TrackContext } from "../contexts/TrackContext";

const Lyrics = props => {
  const [state, dispatch] = useContext(TrackContext);
  const [track, setTrack] = useState({});
  const [lyrics, setLyrics] = useState({});
  const { id } = props.match.params;

  const loadLyrics = async () => {
    let res = await getLyrics(id);
    setLyrics(res.data.message.body.lyrics);
  };

  const loadTrackInfo = async () => {
    let res = await getTrackInfo(id);
    setTrack(res.data.message.body.track);
  };

  useEffect(() => {
    dispatch({
      type: "GET_LYRICS",
      payload: { trackIdSelected: id }
    });
    loadLyrics();
    loadTrackInfo();
  }, [id]);

  if (
    lyrics === undefined ||
    Object.keys(lyrics).length === 0 ||
    track === undefined ||
    Object.keys(track).length === 0
  ) {
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
