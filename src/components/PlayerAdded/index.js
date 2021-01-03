import { connect } from "react-redux";
import PlayerAdded from "./PlayerAdded";

let mapStateToProps = (state) => {
    return {
        playersAdded: state.playersAdded,
    };
};

export default connect(mapStateToProps)(PlayerAdded);

