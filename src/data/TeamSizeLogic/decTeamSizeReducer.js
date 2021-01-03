// reduce number of players in each team
const decTeamSizeReducer = (state) => {
    return {
        ...state,
        teams_size: state.teams_size >= 0 ? state.teams_size - 2 : 0, // ensure users can use negative numbers
    };
}

export default decTeamSizeReducer;