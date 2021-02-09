import react from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongList = (props) => {
	const renderList = props.songs.map((song) => {
		return (
			<div className="item" key={song.title}>
				<div className="right floated content">
					<button
						onClick={() => props.selectSong(song)}
						className="ui button primary"
					>
						Select
					</button>
				</div>

				<div className="content">{song.title}</div>
			</div>
		);
	});

	return <div className="ui divided list">{renderList}</div>;
};

const mapStateToProps = (state) => {
	console.log(state); //& so that whenever there is a update is state we get to know
	return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
//^ the second para of connect is an object holding the actions
