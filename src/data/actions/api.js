import axios from '../../data/axios-config';
// import { addPlayers } from './state';

export const getPlayers = () => {
    return (dispatch) => {
        axios.get('players').then(({ data }) => {
            dispatch({ type: "GET_PLAYERS", data: data.data });
        });
    }
};