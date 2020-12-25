const reducer = (state, action) => {
    switch (action.type) {
        case "INC_TEAM": return {
            ...state,
            team_one_score: state.team_one_score + 1
        };

        case "DEC_TEAM": return {
            ...state,
            team_one_score: state.team_one_score - 1
        };

        default: return state;
    }
};

export default reducer;