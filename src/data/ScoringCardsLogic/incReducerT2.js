const incReducerT2 = (state) => {
    return {
        ...state,
        team_two_score: state.team_two_score + 1
    };
}

export default incReducerT2;