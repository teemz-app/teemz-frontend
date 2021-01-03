const setMatchesReducer = (state) => {
    let matches =  state.matches;
    return {
        ...state,
        matches: matches,
    }
}

export default setMatchesReducer;