const incReducerT2 = (state) => { // increase team score
    return {
        ...state,
        team_two_score: state.team_two_score + 1
    };
}

export default incReducerT2;