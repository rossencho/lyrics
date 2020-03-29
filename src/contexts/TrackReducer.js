const TracksReducer = (state, action) => {
  switch (action.type) {
    case "GET_TRACKS":
      return {
        tracks: action.payload.tracks,
        heading: action.payload.heading
      };
    // case "GET_LYRICS":
    //   return {
    //     lyrics: action.payload.lyrics
    //   };
    default:
      return intialState;
  }
};

export default TracksReducer;
