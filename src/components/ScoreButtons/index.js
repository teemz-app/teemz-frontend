import { connect } from "react-redux";
import ScoreButtons from "./ScoreButtons";
import { increment, decrement } from '../../data/actions';

let mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
});

export default connect(null, mapDispatchToProps)(ScoreButtons);

