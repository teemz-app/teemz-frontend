const incReducerT1 = (state) => {
    return {
        ...state,
        team_one_score: state.team_one_score + 1
    };
}

export default incReducerT1;