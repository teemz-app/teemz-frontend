const ScoreButtons = ({ onIncrement, onDecrement}) => ( 
    <>
        <div>
            <button
                onClick= { onIncrement }
            >
                +
            </button>


            <button
                onClick= { onDecrement }
            >
                -
            </button>
        </div>
    </>
);

export default ScoreButtons;