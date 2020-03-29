import React, { Fragment } from "react";
import Search from "./Search";
import TrackList from "./TrackList";

const Front = () => {
  return (
    <Fragment>
      <Search />
      <TrackList />
    </Fragment>
  );
};

export default Front;
