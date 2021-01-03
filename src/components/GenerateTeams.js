import { useDispatch } from "react-redux";

// A navigation button to take the user to the generate teams page

const GenerateTeams = () => {
    const dispatch = useDispatch();

    const goToPage = () => dispatch({
        type: "NAV_TO_GENERATE"
    });

        return (
            <>
                <button
                    className="doButton"
                    onClick= { goToPage }
                >
                    Generate Teams
                </button>
        </>
        )
    }

export default GenerateTeams;




