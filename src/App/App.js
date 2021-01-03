import GeneratePage from '../components/GeneratePage';
import Menu from '../pages/Menu';
import SeePlayersPage from '../pages/SeePlayersPage';
import GameSavedPage from '../pages/GameSavedPage';

const App = ({ page }) => {

    switch(page) {
        case "generate": return <GeneratePage />; // page that shows teams
        case "menu": return <Menu /> ;
        case "players": return <SeePlayersPage /> ;
        case "game_saved": return <GameSavedPage /> ;
        default: return <Menu />;
    }
}


export default App;