import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "No Scrubs",
      duration: "4:05",
    },
    { title: "Macarena", duration: "3:25" },
    { title: "Back Street Boys", duration: "2:45" },
    { title: "Rome", duration: "2:34" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type == "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
