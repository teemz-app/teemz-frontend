import GenerateTeams from '../components/GenerateTeams';
import SeePlayers from '../components/SeePlayers';
import SeeMatches from '../components/SeeMatches';
import AddPlayer from '../components/AddPlayer';
import PlayerAdded from '../components/PlayerAdded';
import TeamSize from '../components/SetTeamSize/TeamSize';
import TeamSizeButtons from '../components/SetTeamSize/TeamSizeButtons';


let Menu = () => (
    <>
    <nav className="menu">
        <div className="menu_setTeamSize">
            <TeamSize />
            <TeamSizeButtons />
        </div>

        <GenerateTeams />
        <SeePlayers />
        <SeeMatches />
        <AddPlayer />
        <PlayerAdded />

    </nav>
    
    </>
);   

export default Menu;