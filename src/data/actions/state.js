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

// Generate Teams
export const generateTeams = () => {
    return {
        type: "GENERATE_TEAMS",

    }
}

// Download players
export const playersLoaded = ({ id, name, wins, losses }) => {
    return {
        type: "PLAYERS_LOADED",
        id,
        name,
        wins,
        losses,
    }
}

export const addPlayers = ({ id, name, wins, losses }) => {
    return {
        type: "ADD_PLAYERS",
        payload: {
            id,
            name,
            wins,
            losses,
        },
    };
};