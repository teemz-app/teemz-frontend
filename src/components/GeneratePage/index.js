import { connect } from 'react-redux';
import GeneratePage from './GeneratePage';
import { postMatch } from '../../data/actions/api';

const mapStatetoProps = (state) => {
    return {
        data: {
            team_one_name: state.team_one_name,
            team_one_score: state.team_one_score,
            team_two_name: state.team_two_name,
            team_two_score: state.team_two_score,
            team_one_players: state.team_one_players,
            team_two_players: state.team_two_players,
        }
    };
}

const mapDispatchtoProps = (dispatch) => {
    return {
        handleClick: (data) => postMatch(data)(dispatch),
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(GeneratePage)