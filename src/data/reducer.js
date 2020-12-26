const incReducerT1 = (state) => {
    return {
        ...state,
        team_one_score: state.team_one_score + 1
    };
}

const decReducerT1 = (state) => {
    return {
        ...state,
        team_one_score: state.team_one_score > 0 ? state.team_one_score - 1 : state.team_one_score // ternary to avoid negative scores
    };
}

const incReducerT2 = (state) => {
    return {
        ...state,
        team_two_score: state.team_two_score + 1
    };
}

const decReducerT2 = (state) => {
    return {
        ...state,
        team_two_score: state.team_two_score > 0 ? state.team_two_score - 1 : state.team_two_score // ternary to avoid negative scores
    };
}



let reducer = (state, action) => {
    switch (action.type) {
        case "INC_TEAM_ONE": return incReducerT1(state);
        case "DEC_TEAM_ONE": return decReducerT1(state);

        case "INC_TEAM_TWO": return incReducerT2(state);
        case "DEC_TEAM_TWO": return decReducerT2(state);
        default: return state;
    }
};

export default reducer;