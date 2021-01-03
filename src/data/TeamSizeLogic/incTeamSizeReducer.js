const incTeamSizeReducer = (state) => {
    return {
        ...state,
        teams_size: state.teams_size <= 30 ? state.teams_size + 2 : state.teams_size,
    };
}

export default incTeamSizeReducer;