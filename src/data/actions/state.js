// Team one score
export const incTeamOne = () => {
    return {
        type: "INC_TEAM_ONE",
    }
}

export const decTeamOne = () => {
    return {
        type: "DEC_TEAM_ONE",
    }
}

// Team two score
export const incTeamTwo = () => {
    return {
        type: "INC_TEAM_TWO",
    }
}

export const decTeamTwo = () => {
    return {
        type: "DEC_TEAM_TWO",
    }
}

export const updateTeamOneName = (data) => {
    console.log(data);
    return {
        type: "UPDATE_TEAM_ONE",
        data: data,
    }
}

export const updateTeamTwoName = (data) => {
    console.log(data);
    return {
        type: "UPDATE_TEAM_TWO",
        data: data,
    }
}