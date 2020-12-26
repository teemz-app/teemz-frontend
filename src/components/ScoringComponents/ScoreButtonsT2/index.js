import { connect } from "react-redux";
import ScoreButtons from "./ScoreButtons";
import { incTeamTwo, decTeamTwo } from '../../../data/actions.js';

let mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(incTeamTwo()),
    onDecrement: () => dispatch(decTeamTwo()),
});

export default connect(null, mapDispatchToProps)(ScoreButtons);

