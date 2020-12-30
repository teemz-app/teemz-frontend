import { connect } from "react-redux";
import GenerateTeams from './GenerateTeams';
import { getPlayers } from '../../data/actions/api';

const mapStateToProps = ({player}) => {
    return {
        name: player.name,
        wins: player.wins,
        losses: player.losses,
    };
}


let mapDispatchToProps = (dispatch) => {
    return { 
        getPlayers: () => {
            dispatch(getPlayers());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GenerateTeams);