// This allows us to calculate the win rate of individual players, our means to measure skill
let playerWR = (player) => player.wins === 0 ? -(player.losses) : player.wins / (player.wins + player.losses);

export default playerWR;