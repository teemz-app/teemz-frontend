import axios from '../../data/axios-config';

export const getPlayers = () => {
    return (dispatch) => {
        axios.get('/players').then((data) => {
            dispatch({type: "PLAYERS_LOADED", payload: data.data.data})
        });
    };
};