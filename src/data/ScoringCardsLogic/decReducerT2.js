const decReducerT2 = (state) => {
    return {
        ...state,
        team_two_score: state.team_two_score > 0 ? state.team_two_score - 1 : state.team_two_score // ternary to avoid negative scores
    };
}

export default decReducerT2;