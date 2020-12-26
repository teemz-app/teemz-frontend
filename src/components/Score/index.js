import { connect } from "react-redux";
import Score from "./Score";

let mapStateToProps = (state) => {
    return {
        team_score: state.team_score,
    };
};



export default connect(mapStateToProps)(Score);

