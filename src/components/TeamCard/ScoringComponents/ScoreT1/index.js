import { connect } from "react-redux";
import Score from "./Score";

let mapStateToProps = (state) => {
    return {
        team_one_score: state.team_one_score,
    };
};

export default connect(mapStateToProps)(Score);

