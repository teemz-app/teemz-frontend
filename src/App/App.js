import GeneratePage from '../components/GeneratePage/GeneratePage';
import Menu from '../pages/Menu';

const App = ({ page }) => {

    switch(page) {
        case "generate": return <GeneratePage />; // page that shows teams
        case "menu": return <Menu /> ;
        default: return <Menu />;
    }
}


export default App;