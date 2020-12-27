import initial from "../Initial";

/*
In order to randomly pick 10 players, a nested loop is used. The first loop tells the inner logic to run until we have those ten players in the array.
The inner loop ensures that no player is selected twice.
*/

let randomPlayerIndex = () => Math.floor(Math.random() * (initial.players.length - 1));

let tenPlayers = [];

while (tenPlayers.length < initial.teams_size) {
    let index = randomPlayerIndex();

    if (!tenPlayers.includes(initial.players[index])) {
        tenPlayers.push(initial.players[index])
    }
}

/* Now that we have 10 random players, we need to add them to teams one and two */

// let teamsPopulate = (state) => {
//     for (let i = 0; i < state.teamsSize; i += 1) {
//         state.team_one_players < state.team_two_players ? state.team_two_players.push(state.ten_players[i]) : state.team_one_players.push(state.ten_players[i]);
//     }
// }

// teamsPopulate(); // populate teams with 5 players each

const randomiseReducer = (state) => {
    return {
        ...state,
        ten_players: tenPlayers
    };
}

export default randomiseReducer;