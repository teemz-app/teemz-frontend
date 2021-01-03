import { connect } from "react-redux";
import TeamSizeButtons from "./TeamSizeButtons";
import { incTeamSize, decTeamSize } from '../../../../data/actions/state.js';

let mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(incTeamSize()),
    onDecrement: () => dispatch(decTeamSize()),
});

export default connect(null, mapDispatchToProps)(TeamSizeButtons);

