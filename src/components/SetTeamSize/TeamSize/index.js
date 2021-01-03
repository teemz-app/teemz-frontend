import { connect } from "react-redux";
import TeamSize from "./TeamSize";

let mapStateToProps = (state) => {
    return {
        teams_size: state.teams_size,
    };
};

export default connect(mapStateToProps)(TeamSize);

