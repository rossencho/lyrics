const TracksReducer = (state, action) => {
  switch (action.type) {
    case "GET_TRACKS":
      return {
        tracks: action.payload.tracks,
        heading: action.payload.heading,
        trackIdSelected: -1
      };
    case "GET_LYRICS":
      return {
        tracks: [...state.tracks],
        heading: state.heading,
        trackIdSelected: action.payload.trackIdSelected
      };
    default:
      return intialState;
  }
};

export default TracksReducer;
