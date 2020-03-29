import React, { useReducer, createContext } from "react";
import TracksReducer from "./TrackReducer";

export const TrackContext = createContext();

const intialState = {
  tracks: [],
  heading: ""
};

const TrackContextProvider = props => {
  const { children } = props;
  const [state, dispatch] = useReducer(TracksReducer, intialState);

  return (
    <TrackContext.Provider value={[state, dispatch]}>
      {children}
    </TrackContext.Provider>
  );
};

export default TrackContextProvider;
