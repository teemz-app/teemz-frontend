import GenerateTeams from "../GenerateTeams"
import GeneratingMatch from '../../pages/GeneratingMatch';
import Button from "../Button";
import { useSelector, useDispatch } from 'react-redux';

let selectedPlayers = (teams_size, players) => {
    let randomPlayerIndex = () => Math.floor(Math.random() * (players.length));

    let allPlayers = [...players];
    let playerPool = [];

    while (playerPool.length < teams_size) {
        let index = randomPlayerIndex(); console.log("selected player: " + allPlayers[index].name);
        playerPool.push(allPlayers[index]);
        allPlayers.splice(index, 1);
    }
    console.log("playerpool after: " + playerPool);
    return playerPool;
}

let setTeamMembers = (teams_size, teamOnePlayers, teamTwoPlayers, playerPool) => {

    for (let i = 0; i < teams_size; i += 1) {
        teamOnePlayers.length >= teamTwoPlayers.length ? teamTwoPlayers.push(playerPool[i]) : teamOnePlayers.push(playerPool[i]);
    }

    return {
        team_one_players: [...teamOnePlayers],
        team_two_players: [...teamTwoPlayers],
    };
}

let GeneratePage = () => {
    const dispatch = useDispatch();

    let players = [...useSelector(state => state.players)];
    let teams_size = useSelector(state => state.teams_size);

    let teamOnePlayers = useSelector(state => state.team_one_players);
    let teamTwoPlayers = useSelector(state => state.team_two_players);

    let playerPool = selectedPlayers(teams_size, players);
    setTeamMembers(teams_size, teamOnePlayers, teamTwoPlayers, playerPool);


    return (
        <>
            <GenerateTeams />
            <GeneratingMatch />

            <Button
            onClick={ console.log("saved!") }
            label="Save Game!"
            />
        </>
    )
}

export default GeneratePage;