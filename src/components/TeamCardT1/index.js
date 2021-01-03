import { connect } from 'react-redux';
import { updateTeamOneName } from '../../data/actions/state.js';
import TeamCardT1 from './TeamCardT1';

// State
const mapStateToProps = ({ team_one_name }) => {
    return {
        team_one_name,
    };
};

// Dispatch 
const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (data) => { dispatch(updateTeamOneName(data)) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamCardT1);