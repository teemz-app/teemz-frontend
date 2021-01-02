import playerWR from '../../data/TeamGeneratingLogic/logic/playerWR';

const PlayerCard = (player) => (
    <>
        <div className="playerCard_playerName">
            <h2>{ player.name }</h2>

            <div className="playerCard_dataRow">
                <p className="playerCard_dataLabel">Wins</p>
                <p className="playerCard_data">{ player.wins }</p>
            </div>

            <div className="playerCard_dataRow">
                <p className="playerCard_dataLabel">Losses</p>
                <p className="playerCard_data">{ player.wins }</p>
            </div>

            <div className="playerCard_dataRow">
                <p className="playerCard_dataLabel">Win Rate:</p>
                <p className="playerCard_data">{ playerWR(player).toFixed(2) }</p>
            </div>
        </div>

    </>
);

export default PlayerCard;
