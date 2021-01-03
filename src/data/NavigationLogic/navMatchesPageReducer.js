const navMatchesPageReducer = (state,) => { // logic to show see matches page
    return {
        ...state,
        page: "matches",
        loaded: true,
    }
}

export default navMatchesPageReducer;