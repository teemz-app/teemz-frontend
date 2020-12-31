// The re-ordering logic required inside .sort() for reordering the players in terms of win rate
import playerWR from './playerWR';

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

export default compareByWR;