const incrementReducer = (state) => {
    return {
        ...state,
        team_score: state.team_score + 1
    };
}

const decrementReducer = (state) => {
    return {
        ...state,
        team_score: state.team_score > 0 ? state.team_score - 1 : state.team_score // ternary to avoid negative scores
    };
}


let reducer = (state, action) => {
    switch (action.type) {
        case "INC_TEAM": return incrementReducer(state);
        case "DEC_TEAM": return decrementReducer(state);
        default: return state;
    }
};

export default reducer;