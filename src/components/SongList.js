import react from "react";
import { connect } from "react-redux";
<<<<<<< HEAD
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
=======

const SongList = (props) => {
	console.log(props);
	return <div>SongLists</div>;
};

//^ configuring the connect(), mapStateToProps -> the data from state to props
const mapStateToProps = (state) => {
	//^ it is not necesary to name the this function as such

	return { songs: state.songs }; //* whatever we return will come out as props in the SongList component
};

export default connect(mapStateToProps)(SongList);
//^ connect() -> returns a function and then we invoke that function while passing argument
>>>>>>> ad8605fd4528952cba4c93fb3f92208557a616a7
