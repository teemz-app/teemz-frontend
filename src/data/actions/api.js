import axios from '../../data/axios-config';

export const getPlayers = () => {
    return (dispatch) => {
        axios.get('/players').then((data) => {
            dispatch({type: "PLAYERS_LOADED", payload: data.data.data})
        })
        .then(() => dispatch({type: "GENERATE_TEAMS"}));
    };
};



export const postMatch = ({ team_one_name, team_one_score, team_two_name, team_two_score }) => {
    return () => {
        axios.post('/games', {
            team_one: team_one_name,
            team_one_score: team_one_score,
            team_two: team_two_name,
            team_two_score: team_two_score,

        })
    }
}