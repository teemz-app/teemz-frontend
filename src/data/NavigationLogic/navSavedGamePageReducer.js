const navSavedGamePageReducer = (state) => { // logic to show saved game page
    return {
        ...state,
        page: "game_saved",
    }
}

export default navSavedGamePageReducer;