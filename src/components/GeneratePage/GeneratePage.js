import GenerateTeams from "../GenerateTeams"
import GeneratingMatch from '../../pages/GeneratingMatch';
import Button from "../Button";
import { useSelector, useDispatch } from 'react-redux';

// Fisher yates shuffle to shuffle players array into random order
let fisherYatesShuffle = (players) => {
    for (let i = players.length - 1; i > 0; i -= 1) {
        let j = Math.floor(Math.random() * (i + 1));

        [players[i], players[j]] = [players[j], players[i]];
    }
    return players;
}

let selectedPlayers = (teams_size, players) => {
    let allPLayers = [...fisherYatesShuffle(players)];
    let playerPool = [];

    for (let i = 0; i < teams_size; i += 1) {
        playerPool.push(allPLayers[i]);
    }

    console.log(playerPool);
    return playerPool;
}

let setTeamMembers = (teamOnePlayers, teamTwoPlayers, playerPool) => {
        // teamOnePlayers.length >= teamTwoPlayers.length ? teamTwoPlayers.push(playerPool[i]) : teamOnePlayers.push(playerPool[i]);
    // let playersToPlay = [...playerPool];
    // let playerWR = ({player}) => player.wins/(player.wins + player.losses);


    for (let i = 0; i < playerPool.length; i += 1) {

    }

    return {
        team_one_players: teamOnePlayers,
        team_two_players: teamTwoPlayers,
    };
}

let GeneratePage = () => {
    // const dispatch = useDispatch();

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