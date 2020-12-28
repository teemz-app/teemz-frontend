import { connect } from 'react-redux';
import Players from './PlayersCardT2';

const mapStateToProps = (state) => {
    return {
        team_two_players: state.team_two_players
    };
};

export default connect(mapStateToProps)(Players);