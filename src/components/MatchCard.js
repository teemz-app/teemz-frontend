const PlayerCard = (match) => (
    <>
        <div className="matchCard_container">
            <div className="matchCard_dataRow">
                <p className="matchCard_dataLabel">{ match.team_one }</p>
                <p className="matchCard_data">{ match.team_one_score }</p>
            </div>

            <div className="matchCard_dataRow">
                <p className="matchCard_dataLabel">{ match.team_two }</p>
                <p className="matchCard_data">{ match.team_two_score }</p>
            </div>
        </div>
    </>
);

export default PlayerCard;