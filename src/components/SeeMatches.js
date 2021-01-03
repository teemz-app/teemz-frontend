import { useDispatch } from "react-redux";

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

export default SeeMaatches;
