import { /*useSelector,*/ useDispatch } from "react-redux";

const GenerateTeams = () => {
    const dispatch = useDispatch();

    const getPlayers = () => dispatch({
        type: "GET_PLAYERS"
    });

        return (
            <>
                <button
                    className="doButton"
                    onClick= { getPlayers }
                >
                    Generate Teams
                </button>
        </>
        )
    }

export default GenerateTeams;




