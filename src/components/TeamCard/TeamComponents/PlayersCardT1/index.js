import { connect } from 'react-redux';
import Players from './PlayersCardT1';

const mapStateToProps = (state) => {
    return {
        team_one_players: state.team_one_players,
    };
};

export default connect(mapStateToProps)(Players);