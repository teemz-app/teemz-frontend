const TeamSizeButtons = ({ onIncrement, onDecrement}) => ( 
    <>
        <div className="menu_teamButtons_container">
            <button
                className="teamCard_setScoreButton"
                onClick= { onDecrement }
            >
                -
            </button>

            <button
                className="teamCard_setScoreButton"
                onClick= { onIncrement }
            >
                +
            </button>

        </div>
    </>
);

export default TeamSizeButtons;