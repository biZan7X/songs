import { combineReducers } from "redux";

// ^ holds static data ... demo hain na
const songReducer = () => {
	return [
		{ title: "i want it that way", duration: "4:05" },
		{ title: "what doi you mean ?", duration: "3:25" },
		{ title: "america is great", duration: "4:12" },
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === "SONG_SELECTED") {
		return action.song;
	}

	return selectedSong;
};

export default combineReducers({
	songs: songReducer,
	selectedSong: selectedSongReducer,
});
