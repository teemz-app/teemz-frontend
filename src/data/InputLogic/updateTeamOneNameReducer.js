const updateTeamOneNameReducer = (state, data) => {
    return {
        ...state,
        team_one_name: data.data,
    };
};

export default updateTeamOneNameReducer;