import GeneratePage from '../components/GeneratePage';
import Menu from '../pages/Menu';
import SeePlayersPage from '../pages/SeePlayersPage';
import GameSavedPage from '../pages/GameSavedPage';
import SeeMatchesPage from '../pages/SeeMatchesPage';

/*
App.js is where the app decides which page shows, based off of the page key value in state.
*/

const App = ({ page }) => {

    switch(page) {
        case "generate": return <GeneratePage />; // page that shows teams
        case "menu": return <Menu /> ;
        case "players": return <SeePlayersPage /> ;
        case "game_saved": return <GameSavedPage /> ;
        case "matches": return <SeeMatchesPage /> ;
        default: return <Menu />;
    }
}

export default App;