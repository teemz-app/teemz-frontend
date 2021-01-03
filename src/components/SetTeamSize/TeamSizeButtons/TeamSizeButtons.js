// This component changes the teams_size state by 2 so that there is always an even number

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