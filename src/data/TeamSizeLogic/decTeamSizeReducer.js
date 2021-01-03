const decTeamSizeReducer = (state) => {
    return {
        ...state,
        teams_size: state.teams_size >= 0 ? state.teams_size - 2 : 0,
    };
}

export default decTeamSizeReducer;