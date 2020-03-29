import React from "react";
import { Link } from "react-router-dom";

const Track = props => {
  const { artist_name, track_name, album_name, track_id } = props.track;
  return (
    <React.Fragment>
      <div className="col-md-6">
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h5>{artist_name}</h5>
            <p className="card-text">
              <strong>
                <i className="fas fa-play" /> Track
              </strong>
              : {track_name}
              <br />
              <strong>
                <i className="fas fa-compact-disc" /> Album
              </strong>
              : {album_name}
            </p>
            <Link to={`track/${track_id}`} className="btn btn-dark btn-block">
              <i className="fas fa-chevron-right" /> View Lyrics
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Track;
