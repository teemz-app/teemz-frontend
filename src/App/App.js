import GeneratePage from '../components/GeneratePage';
import Menu from '../pages/Menu';
import SeePlayersPage from '../pages/SeePlayersPage';

const App = ({ page }) => {

    switch(page) {
        case "generate": return <GeneratePage />; // page that shows teams
        case "menu": return <Menu /> ;
        case "players": return <SeePlayersPage /> ;
        default: return <Menu />;
    }
}


export default App;