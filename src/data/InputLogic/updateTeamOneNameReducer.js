const updateTeamOneNameReducer = (state, data) => { // update team name in state
    return {
        ...state,
        team_one_name: data.data,
    };
};

export default updateTeamOneNameReducer;