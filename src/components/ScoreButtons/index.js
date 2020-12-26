import { connect } from "react-redux";
import ScoreButtons from "./ScoreButtons";

let mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch({ type: "INC_TEAM" }),
    onDecrement: () => dispatch({ type: "DEC_TEAM" }),
});

export default connect(null, mapDispatchToProps)(ScoreButtons);

