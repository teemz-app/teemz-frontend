import { connect } from "react-redux";
import ScoreButtons from "./ScoreButtons";
import { incTeamOne, decTeamOne } from '../../../../data/actions.js';

let mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(incTeamOne()),
    onDecrement: () => dispatch(decTeamOne()),
});

export default connect(null, mapDispatchToProps)(ScoreButtons);

