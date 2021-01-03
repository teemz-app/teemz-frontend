const updateTeamTwoNameReducer = (state, data) => { // update team name in state
    return {
        ...state,
        team_two_name: data.data,
    };
};

export default updateTeamTwoNameReducer;