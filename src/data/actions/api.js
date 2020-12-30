import axios from '../../data/axios-config';
import { addPlayers } from './state';

export const getPlayers = () => {
    return (dispatch) => {
        axios.get("players").then(({ data }) => {
                // dispatch(addPlayers(data));
                // dispatch(console.log(data));
        });
    };
};