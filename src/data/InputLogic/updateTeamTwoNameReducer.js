const updateTeamTwoNameReducer = (state, data) => {
    return {
        ...state,
        team_two_name: data.data,
    };
};

export default updateTeamTwoNameReducer;