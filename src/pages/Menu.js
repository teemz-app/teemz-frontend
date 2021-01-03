import GenerateTeams from '../components/GenerateTeams';
import SeePlayers from '../components/SeePlayers';
import SeeMatches from '../components/SeeMatches';
import AddPlayer from '../components/AddPlayer';

let Menu = () => (
    <>
    <nav className="menu">
        <GenerateTeams />
        <SeePlayers />
        <SeeMatches />
        <AddPlayer />

    </nav>
    
    </>
);   

export default Menu;