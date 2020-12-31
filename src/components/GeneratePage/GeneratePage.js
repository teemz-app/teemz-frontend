import GenerateTeams from "../GenerateTeams"
import GeneratingMatch from '../../pages/GeneratingMatch';
import Button from "../Button";
import { useSelector, useDispatch } from 'react-redux';
import selectedPlayers from '../../data/TeamGeneratingLogic/selectedPlayers';
import setTeamMembers from '../../data/TeamGeneratingLogic/setTeamMembers';


let GeneratePage = () => {
    const dispatch = useDispatch();

    let players = [...useSelector(state => state.players)];
    let teams_size = useSelector(state => state.teams_size);

    // Select required players and generate two balanced teams
    let playerPool = selectedPlayers(teams_size, players);
    setTeamMembers(playerPool);

    function passTeamsIntoState() {
        dispatch ({
            type: "GENERATE_TEAMS",
            
        })
    }


    return (
        <>
            <GenerateTeams />
            <GeneratingMatch />

            <Button
            onClick={ console.log("stop logging!") }
            label="Save Game!"
            type="button"
            />
        </>
    )
}

export default GeneratePage;