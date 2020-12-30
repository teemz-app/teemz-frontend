import initial from "../Initial";

/*
TODO: document. 
*/


let allPlayers = initial.players;
let tenPlayers = [];
let teamOnePlayers = [];
let teamTwoPlayers = [];

let randomPlayerIndex = () => Math.floor(Math.random() * (allPlayers.length));

while (tenPlayers.length < initial.teams_size) {
    let index = randomPlayerIndex();
    tenPlayers.push(initial.players[index]);
    allPlayers.splice(index, 1);
}

/* Now that we have 10 random players, we need to add them to teams one and two */

for (let i = 0; i < initial.teams_size; i += 1) {
    teamOnePlayers.length >= teamTwoPlayers.length ? teamTwoPlayers.push(tenPlayers[i]) : teamOnePlayers.push(tenPlayers[i]);
}

const randomiseReducer = (state) => {
    return {
        ...state,
        team_one_players: teamOnePlayers,
        team_two_players: teamTwoPlayers
    };
}

export default randomiseReducer;