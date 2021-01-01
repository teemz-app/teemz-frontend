import axios from '../../data/axios-config';
import { playersLoaded } from './state';

export const getPlayers = () => {
    return (dispatch) => {
        axios.get('/players').then((data) => {
            dispatch({type: "PLAYERS_LOADED", payload: data.data.data})
        });
    };
};

// export const getPlayers = () => {
//     return (dispatch) => {
//         axios.get('/players').then(({ data }) => {
//             data.data.forEach((player) => {
//                 dispatch(
//                     playersLoaded({
//                         id: player.id,
//                         name: player.name,
//                         wins: player.wins,
//                         losses: player.losses,
                        
//                     }),
//                 );
//             });
//         });
//     };
// };