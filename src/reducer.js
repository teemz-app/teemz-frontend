const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT_TEAM_ONE": return {
            ...state,
            value: state.value + 1
        };

        case "DECREMENT_TEAM_ONE": return {
            ...state,
            value: state.value - 1
        };

        default: return state;
    }
};

export default reducer;