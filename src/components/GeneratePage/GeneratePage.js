import GenerateTeams from "../GenerateTeams"
import GeneratingMatch from '../../pages/GeneratingMatch';
import Button from "../Button";
import { useSelector, useDispatch } from 'react-redux';
import selectedPlayers from '../../data/TeamGeneratingLogic/selectedPlayers';
import setTeamMembers from '../../data/TeamGeneratingLogic/setTeamMembers';


let GeneratePage = () => {
    // const dispatch = useDispatch();

    let players = [...useSelector(state => state.players)];
    let teams_size = useSelector(state => state.teams_size);

    let playerPool = selectedPlayers(teams_size, players);
    setTeamMembers(playerPool);


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