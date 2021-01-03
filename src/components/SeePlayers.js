import { useDispatch } from "react-redux";

// A navigation button to take the user to the see players page

const SeePlayers = () => {
    const dispatch = useDispatch();

    const goToPage = () => dispatch({
        type: "NAV_TO_PLAYERS"
    });

        return (
            <>
                <button
                    className="doButton"
                    onClick= { goToPage }
                >
                    See Players
                </button>
        </>
        )
    }

export default SeePlayers;




