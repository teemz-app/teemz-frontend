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

export const navMenuRed = () => {
    return {
        page: "menu",
    }
}

// Bring in Players
export const playersLoaded = ({ id, name, wins, losses }) => {
    return {
        type: "PLAYERS_LOADED",
        payload: {
            id: id,
            name: name,
            wins: wins,
            losses: losses,
        }
    }
}