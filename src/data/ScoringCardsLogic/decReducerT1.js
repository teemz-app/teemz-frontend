const decReducerT1 = (state) => { // reduce team score
    return {
        ...state,
        team_one_score: state.team_one_score > 0 ? state.team_one_score - 1 : state.team_one_score // ternary to avoid negative scores
    };
}

export default decReducerT1;