import GenerateTeams from '../components/GenerateTeams';
import SeePlayers from '../components/SeePlayers';
import SeeMatches from '../components/SeeMatches';

let Menu = () => (
    <>
    <nav className="menu">
        <GenerateTeams />
        <SeePlayers />
        <SeeMatches />

    </nav>
    
    </>
);

export default Menu;