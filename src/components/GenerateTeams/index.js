import { connect } from "react-redux";
import GenerateTeams from './GenerateTeams';
import { getPlayers } from '../../data/actions/api';

let mapDispatchToProps = (dispatch) => {
    return { 
        getPlayers: () => {
            dispatch(getPlayers());
        }
    }
};

export default connect(null, mapDispatchToProps)(GenerateTeams);