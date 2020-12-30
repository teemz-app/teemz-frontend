import GenerateTeams from './GenerateTeams';
import { connect } from "react-redux";
// import { getPlayers } from '../../data/actions/api';
import initial from '../../data/Initial';

const mapStateToProps = ({players}) => {
    return {
        players: players,
    }
};

let mapDispatchToProps = (dispatch) => {
    return { 
        getPlayers: () => dispatch(playersLoadedReducer(initial)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GenerateTeams);