const ScoreButtons = ({ onIncrement, onDecrement}) => ( 
    <>
        <div>
            <button
                className="teamCard_setScoreButton"
                onClick= { onIncrement }
            >
                +
            </button>


            <button
                className="teamCard_setScoreButton"
                onClick= { onDecrement }
            >
                -
            </button>
        </div>
    </>
);

export default ScoreButtons;