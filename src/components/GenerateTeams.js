import { useDispatch } from "react-redux";

const GenerateTeams = () => {
    const dispatch = useDispatch();

    function passTeamsIntoState() {
        dispatch ({
            type: "GENERATE_TEAMS",
            
        })
    }

    const goToPage = () => dispatch({
        type: "NAV_TO_GENERATE"
    });

    const onClick = () => {
        passTeamsIntoState();
        goToPage();
    }

        return (
            <>
                <button
                    className="doButton"
                    onClick= { onClick }
                >
                    Generate Teams
                </button>
        </>
        )
    }

export default GenerateTeams;




