import { connect } from "react-redux";
import GenerateTeams from './GenerateTeams';
import { getPlayers } from '../../data/actions/api';

const mapStateToProps = ({ players }) => {
    return {
        name: players.name,
        wins: players.wins,
        losses: players.losses,
    };
}


let mapDispatchToProps = (dispatch) => {
    return { 
        getPlayers: () => dispatch(getPlayers()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GenerateTeams);