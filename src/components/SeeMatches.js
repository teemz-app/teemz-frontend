import { useDispatch } from "react-redux";

// A navigation button to take the user to the See Matches page

const SeeMatches = () => {
    const dispatch = useDispatch();

    const goToPage = () => dispatch({
        type: "NAV_TO_MATCHES"
    });

        return (
            <>
                <button
                    className="doButton"
                    onClick= { goToPage }
                >
                    See Matches
                </button>
        </>
        )
    }

export default SeeMatches;
