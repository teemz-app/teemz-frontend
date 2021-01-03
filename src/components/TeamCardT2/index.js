import { connect } from 'react-redux';
import { updateTeamTwoName } from '../../data/actions/state.js';
import TeamCardT2 from './TeamCardT2';

// State
const mapStateToProps = ({ team_two_name }) => {
    return {
        team_two_name,
    };
};

// Dispatch 
const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (data) => { dispatch(updateTeamTwoName(data)) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamCardT2);