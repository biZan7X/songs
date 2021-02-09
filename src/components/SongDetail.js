import react from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
	if (!song) return <div>Select a song first</div>;

	return (
		<div>
			<h3>Details:</h3>
			<p>
				Title : {song.title}
				<br />
				Duration : {song.duration}
			</p>
		</div>
	);
};

const mapStateToProp = (state) => {
	return { song: state.selectedSong };
};

export default connect(mapStateToProp)(SongDetail);
