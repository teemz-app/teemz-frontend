import initial from "../Initial";

/*
In order to randomly pick 10 players, a nested loop is used. The first loop tells the inner logic to run until we have those ten players in the array.
The inner loop ensures that no player is selected twice.
*/

let randomPlayerIndex = () => Math.floor(Math.random() * (initial.players.length - 1));

let tenPlayers = [];
let teamOnePlayers = [];
let teamTwoPlayers = [];

while (tenPlayers.length < initial.teams_size) {
    let index = randomPlayerIndex();

    if (!tenPlayers.includes(initial.players[index])) {
        tenPlayers.push(initial.players[index])
    }
}

/* Now that we have 10 random players, we need to add them to teams one and two */

for (let i = 0; i < initial.teams_size; i += 1) {
    teamOnePlayers.length >= teamTwoPlayers.length ? teamTwoPlayers.push(tenPlayers[i]) : teamOnePlayers.push(tenPlayers[i]);
}

const randomiseReducer = (state) => {
    return {
        ...state,
        ten_players: tenPlayers,
        team_one_players: teamOnePlayers,
        team_two_players: teamTwoPlayers
    };
}

export default randomiseReducer;