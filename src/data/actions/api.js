import axios from '../../data/axios-config';

export const getPlayers = () => {
    return (dispatch) => {
        axios.get('/players').then((data) => {
            dispatch({type: "PLAYERS_LOADED", payload: data.data.data})
        })
        .then(() => dispatch({type: "GENERATE_TEAMS"}));
    };
};

export const postMatch = ({ team_one_name, team_one_score, team_two_name, team_two_score, team_one_players, team_two_players }) => {
    return (dispatch) => {
        axios.post('/games', {
            team_one: team_one_name,
            team_one_score: team_one_score,
            team_two: team_two_name,
            team_two_score: team_two_score,

        }).then(()=>console.log(team_one_players, team_one_score)).then(() => {    

            // post request to update player one 
            team_one_players.forEach(player => {
                if (team_one_score > team_two_score) {
                    axios.patch(`/players/${player.id}`, {
                        name: player.name,
                        wins: player.wins + 1,
                        losses: player.losses,
                    })
                } else if (team_two_score > team_one_score) {
                    axios.patch(`/players/${player.id}`, {
                        name: player.name,
                        wins: player.wins,
                        losses: player.losses + 1,
                    })
                }
            })}
        ).then(() => {

            // post request to update player two
            team_two_players.forEach(player => {
                if (team_one_score > team_two_score) {
                    axios.patch(`/players/${player.id}`, {
                        name: player.name,
                        wins: player.wins + 1,
                        losses: player.losses,
                    })
                } else if (team_two_score > team_one_score) {
                    axios.patch(`/players/${player.id}`, {
                        name: player.name,
                        wins: player.wins,
                        losses: player.losses + 1,
                    })
                }
            })
        }).then(() => dispatch({type: "NAV_TO_SAVED_GAME"}));
    }
}