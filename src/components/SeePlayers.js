import { useDispatch } from "react-redux";

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




