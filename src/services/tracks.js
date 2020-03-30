import axios from "axios";
import {
  MUSICMATCH_GET_TRACKS_URL,
  MUSICMATCH_GET_LYRICS_URL,
  MUSICMATCH_GET_TRACK_URL
} from "../config/defines";

export const getTracks = async param => {
  try {
    return await axios.get(
      MUSICMATCH_GET_TRACKS_URL.replace(/\{\%\w+\%\}/, param)
    );
  } catch (e) {
    return e.message;
  }
};

export const getLyrics = async id => {
  try {
    return await axios.get(
      MUSICMATCH_GET_LYRICS_URL.replace(/\{\%\w+\%\}/, id)
    );
  } catch (e) {
    return e.message;
  }
};

export const getTrackInfo = async id => {
  try {
    return await axios.get(MUSICMATCH_GET_TRACK_URL.replace(/\{\%\w+\%\}/, id));
  } catch (e) {
    return e.message;
  }
};
