import GenerateTeams from '../components/GenerateTeams';
import SeePlayers from '../components/SeePlayers';
import SeeMatches from '../components/SeeMatches';
import AddPlayer from '../components/AddPlayer';
import PlayerAdded from '../components/PlayerAdded';


let Menu = () => (
    <>
    <nav className="menu">
        <GenerateTeams />
        <SeePlayers />
        <SeeMatches />
        <AddPlayer />
        <PlayerAdded />

    </nav>
    
    </>
);   

export default Menu;