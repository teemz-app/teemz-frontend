const navMatchesPageReducer = (state,) => {
    return {
        ...state,
        page: "matches",
        loaded: true,
    }
}

export default navMatchesPageReducer;