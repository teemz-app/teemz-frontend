import { connect } from "react-redux";
import { generateTeams } from '../../data/actions/state';
import GenerateTeams from './GenerateTeams';

let mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch(generateTeams()),
});

export default connect(null, mapDispatchToProps)(GenerateTeams);