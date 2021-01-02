import { connect } from 'react-redux';
import GeneratePage from './GeneratePage';
import { postMatch } from '../../data/actions/api';

const mapStatetoProps = ({ team_one_name, team_one_score, team_two_name, team_two_score }) => {
    return {
        team_one_name: team_one_name,
        team_one_score: team_one_score,
        team_two_name: team_two_name,
        team_two_score: team_two_score,
    };
}

const mapDispatchtoProps = (dispatch) => {
    return {
        handleClick: (data) => dispatch(postMatch(data)),
    }
}


export default connect(mapStatetoProps, mapDispatchtoProps)(GeneratePage)