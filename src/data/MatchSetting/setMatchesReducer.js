const setMatchesReducer = (state) => { // pass matches into state
    let matches =  state.matches;
    return {
        ...state,
        matches: matches,
    }
}

export default setMatchesReducer;