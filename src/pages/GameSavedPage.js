import SeePlayers from '../components/SeePlayers';
import NavToMenu from '../components/NavToMenu';

let GameSavedPage = () => (
    <nav className="playerCard_container">
        <div className="menu">
            <h2 className="title">Game Saved!</h2>
            <NavToMenu />
            <SeePlayers/>

        </div>
    </nav>
)




export default GameSavedPage;