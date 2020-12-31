import { useSelector, useDispatch } from "react-redux";
import setTeamMembers from '../data/TeamGeneratingLogic/setTeamMembers';
import selectedPlayers from '../data/TeamGeneratingLogic/selectedPlayers';


const GenerateTeams = () => {
    const dispatch = useDispatch();

    let players = [...useSelector(state => state.players)];
    let teams_size = useSelector(state => state.teams_size);

    // Select required players and generate two balanced teams
    let playerPool = selectedPlayers(teams_size, players);
    let teams = setTeamMembers(playerPool);

    function passTeamsIntoState() {
        dispatch ({
            type: "GENERATE_TEAMS",
            
        })
    }


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




