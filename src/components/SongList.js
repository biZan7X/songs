import react from "react";
import { connect } from "react-redux";

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
