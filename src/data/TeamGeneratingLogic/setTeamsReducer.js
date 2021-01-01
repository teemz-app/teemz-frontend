// import { useSelector } from "react-redux";
import setTeamMembers from './setTeamMembers';
import selectedPlayers from './selectedPlayers';

const setTeamsReducer = (state) => {
    let players =  state.players;
    let teams_size = state.teams_size;

    // Select required players and generate two balanced teams
    let playerPool = selectedPlayers(teams_size, players);
    let teams = setTeamMembers(playerPool);
    return {
        ...state,
        team_one_players: teams.team_one_players,
        team_two_players: teams.team_two_players,
    }
}

export default setTeamsReducer;