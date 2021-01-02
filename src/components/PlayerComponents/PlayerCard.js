import playerWR from '../../data/TeamGeneratingLogic/logic/playerWR';

const PlayerCard = (player) => (
    <>
        <div className="playerCard_container">
            <h2 className="playerCard_playerName">{ player.name }</h2>

            <div className="playerCard_dataRow">
                <p className="playerCard_dataLabel">Wins</p>
                <p className="playerCard_data">{ player.wins }</p>
            </div>

            <div className="playerCard_dataRow">
                <p className="playerCard_dataLabel">Losses</p>
                <p className="playerCard_data">{ player.losses }</p>
            </div>

            <div className="playerCard_dataRow">
                <p className="playerCard_dataLabel">Win Rate:</p>
                <p className="playerCard_data playerWR">{ playerWR(player).toFixed(2) }</p>
            </div>
        </div>

    </>
);

export default PlayerCard;
