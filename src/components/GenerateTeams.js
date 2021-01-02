import { useDispatch } from "react-redux";

const GenerateTeams = () => {
    const dispatch = useDispatch();

    const goToPage = () => dispatch({
        type: "NAV_TO_GENERATE"
    });

    const onClick = () => {
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




