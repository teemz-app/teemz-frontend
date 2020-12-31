import { useDispatch } from "react-redux";

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




