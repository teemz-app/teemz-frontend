import { connect } from "react-redux";
import ScoreButtons from "./ScoreButtons";
import { incTeamOne, decTeamOne } from '../../../../data/actions/state.js';

let mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(incTeamOne()),
    onDecrement: () => dispatch(decTeamOne()),
});

export default connect(null, mapDispatchToProps)(ScoreButtons);

