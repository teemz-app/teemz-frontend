import axios from '../../data/axios-config';


// get players and then fire off the generate teams action which puts al players into state and randomly selected players into teams
export const getPlayers = () => {
    return (dispatch) => {
        axios.get('/players').then((data) => {
            dispatch({type: "PLAYERS_LOADED", payload: data.data.data})
        })
        .then(() => dispatch({type: "GENERATE_TEAMS"}));
    };
};

// get matches and then fire off the generate matches action which puts al matches into state so that they can be listed
export const getMatches = () => {
    return (dispatch) => {
        axios.get('/games').then((data) => {
            console.log(data.data.data);
            dispatch({type: "MATCHES_LOADED", payload: data.data.data})
        })
        .then(() => dispatch({type: "GENERATE_MATCHES"}));
    };
};


// posts Match, and then patches all the players that were in that match so that their wins and losses data remain up to date
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

// add new player to the database
export const postPlayer = (player) => {
    console.log(player);
    return (dispatch) => {
        axios.post('/players', {
            name: player.name,
        }).then(() => dispatch({type: "PLAYER_ADDED"}))
    };
}