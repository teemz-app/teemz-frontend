import initial from "../Initial";

/*
In order to randomly pick 10 players, a nested loop is used. The first loop tells the inner logic to run until we have those ten players in the array.
The inner loop ensures that no player is selected twice.
*/

let randomPlayerIndex = () => Math.floor(Math.random() * (initial.players.length));

let teamsSize = initial.teams_size; // for future feature of modifying team sizes
let players = initial.players;
let ten_players = initial.ten_players;

let playersPopulate = () => {
    while (players.length < teamsSize) {
        let index = randomPlayerIndex();

        for (let i = 0; i < ten_players.length; i += 1) {
            if (players[index] !== ten_players[i]) {
                return {
                    ...state,
                    ten_players: state.ten_players.push(players[index])
                };
            }
        }
    }
}

playersPopulate(); // populates ten_players array with 10 players

/* Now that we have 10 random players, we need to add them to teams one and two */
let team_one_players = initial.team_one_players;
let team_two_players = initial.team_two_players;

let teamsPopulate = () => {
    for (let i = 0; i < teamsSize; i += 1) {
        team_one_players < team_two_players ? team_two_players.push(ten_players[i]) : team_one_players.push(ten_players[i]);
    }
}

teamsPopulate(); // populate teams with 5 players each

const randomiseReducer = (state) => {
    return {
        ...state,
        team_one_players: state.team_one_players.push(team_one_players),
        team_two_players: state.team_two_players.push(team_two_players),
    };
}

export default randomiseReducer;