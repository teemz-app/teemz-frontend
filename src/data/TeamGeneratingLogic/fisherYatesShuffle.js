// Fisher-Yates shuffle to shuffle players array into random order, and is considered an efficient way of shuffling an array.
let fisherYatesShuffle = (players) => {
    for (let i = players.length - 1; i > 0; i -= 1) {
        let j = Math.floor(Math.random() * (i + 1));

        [players[i], players[j]] = [players[j], players[i]];
    }
    return players;
}

export default fisherYatesShuffle;