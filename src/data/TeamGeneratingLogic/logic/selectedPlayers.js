import fisherYatesShuffle from './fisherYatesShuffle';
import compareByWR from './compareByWR';

/*
We're shuffling the players and then taking all the players needed from the beginning of the array, and keeping them in a new array.
After this we sort the array so that higher win rate players (the better ones) are at the beginning of the array, and then return irt
*/
let selectedPlayers = (teams_size, players) => {
    // randomise playerbase
    let allPLayers = [...fisherYatesShuffle(players)];
    // array of players to be returned at the end of this function
    let playerPool = [];

    // push first ten players of the shuffled array into playerPool, as this will be the pool of players we'll get teams from
    for (let i = 0; i < (teams_size <= players.length ? teams_size : players.length); i += 1) {
        playerPool.push(allPLayers[i]);
    }

    // sort the array so tghat high skill players are at the beginning and return it.
    return playerPool.sort(compareByWR);
}

export default selectedPlayers;