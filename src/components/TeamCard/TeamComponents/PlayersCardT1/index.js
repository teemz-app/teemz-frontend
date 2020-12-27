import { connect } from "react-redux";
import { incTeamOne, decTeamOne } from '../../../../data/actions.js';
import PlayersCardT1 from './index';

let mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(incTeamOne()),
});

export default connect(null, mapDispatchToProps)(PlayersCardT1);