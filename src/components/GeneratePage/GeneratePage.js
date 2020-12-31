import GenerateTeams from "../GenerateTeams"
import GeneratingMatch from '../../pages/GeneratingMatch';
import Button from "../Button";
import { useSelector, useDispatch } from 'react-redux';

// Fisher yates shuffle to shuffle players array into random order, and is considered an efficient way of shuffling an array.
let fisherYatesShuffle = (players) => {
    for (let i = players.length - 1; i > 0; i -= 1) {
        let j = Math.floor(Math.random() * (i + 1));

        [players[i], players[j]] = [players[j], players[i]];
    }
    return players;
}

// We're shuffling the players in the array and then taking all the players needed from the beginning of the array. Now we have the players needed to fill two teams.
let selectedPlayers = (teams_size, players) => {
    let allPLayers = [...fisherYatesShuffle(players)];
    let playerPool = [];

    for (let i = 0; i < teams_size; i += 1) {
        playerPool.push(allPLayers[i]);
    }

    return playerPool.sort(compareByWR);
}

// This allows us to calculate the win rate of individual players, which will be used for 1) reordering the array of players to join the teams in order of win rate and 2) help us determine which player goes into which team
let playerWR = (player) => player.wins === 0 ? -(player.losses) : player.wins / (player.wins + player.losses);

// The re-ordering logic required inside .sort() for reordering the players in terms of win rate
let compareByWR = (player1, player2) => {
    let player1WR = playerWR(player1);
    let player2WR = playerWR(player2);

    if (player1WR < player2WR) {
        return 1;
    } else if (player1WR > player2WR) {
        return -1;
    } else {
        return 0;
    }
}

// Splitting the players into two teams
/*
Team 1 get the odd numbered indexes, and Team 2 will get the even numbered indexes
*/
let setTeamMembers = (playerPool) => {
    let firstOfT1 = playerPool[0]; // 1st player odd 
    let firstOfT2 = playerPool[1]; // 2nd player even

    let team_one_players = []; // t1[0, 3, 5, 7, 9]
    team_one_players.push(firstOfT1);  // t2[1, 2, 4, 6, 8]
    console.log("Team one: ", team_one_players);
    let team_two_players = [];
    team_two_players.push(firstOfT2);
    console.log("Team two: ", team_two_players);

    for (let i = 2; i < (playerPool.length); i += 1) {
        i % 2 === 0 ? team_two_players.push(playerPool[i]) : team_one_players.push(playerPool[i]);
    }

    let output  = {
        team_one_players: team_one_players,
        team_two_players: team_two_players,
    };

    console.log(output);
    return output;
}

let GeneratePage = () => {
    // const dispatch = useDispatch();

    let players = [...useSelector(state => state.players)];
    let teams_size = useSelector(state => state.teams_size);

    let playerPool = selectedPlayers(teams_size, players);
    setTeamMembers(playerPool);


    return (
        <>
            <GenerateTeams />
            <GeneratingMatch />

            <Button
            onClick={ console.log("stop logging!") }
            label="Save Game!"
            type="button"
            />
        </>
    )
}

export default GeneratePage;