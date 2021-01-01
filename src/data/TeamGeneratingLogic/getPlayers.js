let allPlayers = state.players;

const getPlayers = (state) => {
    return {
        ...state,
        // players: [...state.players, allPlayers],
        team_one_score: state.team_one_score + 1,
    }
}


export default getPlayers;