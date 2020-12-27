import initial from "../Initial";

let randomPlayerIndex = () => Math.floor(Math.random() * (initial.players.length));

let teamSize = initial.team_size;
let players = initial.players;
let ten_players = initial.ten_players;

let playersPopulate = () => {
    while (players.length < teamSize) {
        let index = randomPlayerIndex();

        for (let i = 0; i < ten_players.length; i += 1) {
            if (players[index] !== ten_players[i]) {
                ten_players.push(players[index]);
            }
        }
    } 
}

playersPopulate();









// 
const randomise = (state) => {
    return {
        ...state,
        team_two_score: state.team_two_score > 0 ? state.team_two_score - 1 : state.team_two_score // ternary to avoid negative scores
    };
}

export default randomise;